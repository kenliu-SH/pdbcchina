import { useEffect } from 'react';
import Config from '@/common/config';
import '../../../../../public/css/rcsb-molstar.css';
import styles from '../../styles/View.less';

export default ({ id, hideControls }: any) => {
  useEffect(() => {
    //  文件二进制 必须
    const viewer = new molstar.Viewer('app', {
      pdbProvider: 'pdbe',
      emdbProvider: 'pdbe',
      layoutShowControls: !hideControls,
    });
    const structureUrl = Config.SERVER_HOME + `file/mmCIF/down/` + id + `.cif`;
    const structureUrlFormat = 'mmcif';
    let structureUrlIsBinary = 0;
    viewer.loadStructureFromUrl(
      structureUrl,
      structureUrlFormat,
      structureUrlIsBinary,
    );
    setTimeout(() => {
      window.MolstarLoaded = true;
    }, 1000);
  }, []);
  return (
    <div
      id="molstar-ui"
      className={hideControls ? styles.molstar_container : ''}
    >
      <div id="app" style={{ height: '800px', clear: 'both' }} />
    </div>
  );
};
