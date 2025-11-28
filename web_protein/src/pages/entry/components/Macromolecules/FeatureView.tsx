import { useEffect } from 'react';

export default ({ id, proteinFeatureView }: any) => {
  useEffect(() => {
    if (id && proteinFeatureView) {
      const {
        name,
        uniprot,
        unmodeled,
        artifact,
        sheet,
        helix,
        mutation,
        modifiedResiduesNucleosides,
      } = proteinFeatureView;
      const sequence = name?.sequence?.replace('\n', '');
      const boardConfig = {
        range: {
          min: 1,
          max: sequence?.length,
        },
        trackWidth: 940,
        includeAxis: true,
      };
      const rowConfigData: any = [
        {
          trackId: 'sequenceTrack',
          trackHeight: 20,
          trackColor: '#F9F9F9',
          displayType: 'sequence',
          nonEmptyDisplay: true,
          rowTitle: name.id,
          trackData: [
            {
              begin: 1,
              value: sequence,
            },
          ],
        },
      ];
      if (
        uniprot &&
        uniprot.sequence &&
        JSON.stringify(uniprot.sequence) !== '{}'
      ) {
        rowConfigData.push({
          trackId: 'uniprotTrack',
          trackHeight: 20,
          trackColor: '#F9F9F9',
          displayType: 'block',
          displayColor: '#385723',
          rowTitle: 'UNIPROT' + ' ' + uniprot?.id,
          trackData: (uniprot?.sequence && [uniprot?.sequence]) || [],
        });
      }
      if (unmodeled && unmodeled.length !== 0) {
        unmodeled.map((vo: any) => {
          rowConfigData.push({
            trackId: 'blockTrack',
            trackHeight: 20,
            trackColor: '#F9F9F9',
            displayType: 'block',
            displayColor: 'rgba(219,219,219,1)',
            rowTitle: 'UNMODELED' + ' ' + vo.id,
            trackData: vo.sequence || [],
          });
        });
      }
      if (artifact && artifact.length !== 0) {
        artifact.map((vo: any) => {
          rowConfigData.push({
            trackId: 'vlineTrack',
            trackHeight: 20,
            trackColor: '#F9F9F9',
            displayType: 'block',
            displayColor: 'rgba(0,0,0,0.85)',
            rowTitle: 'ARTIFACT' + ' ' + vo.id,
            trackData:
              vo.sequence.map((vo: any) => {
                return { begin: vo };
              }) || [],
          });
        });
      }
      if (sheet && sheet.length !== 0) {
        sheet.map((vo: any) => {
          rowConfigData.push({
            trackId: 'blockTrack',
            trackHeight: 20,
            trackColor: '#F9F9F9',
            displayType: 'block',
            displayColor: '#a21a20',
            rowTitle: 'SHEET' + ' ' + vo.id,
            trackData: vo.sequence || [],
          });
        });
      }
      if (helix && helix.length !== 0) {
        helix.map((vo: any) => {
          rowConfigData.push({
            trackId: 'blockTrack',
            trackHeight: 20,
            trackColor: '#F9F9F9',
            displayType: 'block',
            displayColor: '#203864',
            rowTitle: 'HELIX' + ' ' + vo.id,
            trackData: vo.sequence || [],
          });
        });
      }
      if (modifiedResiduesNucleosides) {
        rowConfigData.push({
          trackId: 'pinTrack',
          trackHeight: 20,
          trackColor: '#F9F9F9',
          displayType: 'pin',
          displayColor: '#203864',
          rowTitle: 'Modified Residues/Nucleosides',
          trackData:
            modifiedResiduesNucleosides.sequence?.map((vo: number) => {
              return { begin: vo };
            }) || [],
        });
      }
      if (mutation) {
        rowConfigData.push({
          trackId: 'pinTrack',
          trackHeight: 20,
          trackColor: '#F9F9F9',
          displayType: 'pin',
          displayColor: '#203864',
          rowTitle: 'Mutation',
          trackData:
            mutation.sequence?.map((vo: number) => {
              return { begin: vo };
            }) || [],
        });
      }
      const pfv = new RcsbFv.Create({
        boardConfigData: boardConfig,
        rowConfigData: rowConfigData,
        elementId: id,
      });
    }
  }, [id, proteinFeatureView]);
  return <div id={id} />;
};
