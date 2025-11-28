import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    children,
    label,
    type,
  } as MenuItem;
}

export const items: MenuItem[] = [
  getItem('General Help', '/docs/general-help', [
    getItem(
      'Organization of 3D Structures in the Protein Data Bank',
      '/docs/general-help/organization-of-3d-structures-in-the-protein-data-bank',
    ),
    getItem('Identifiers in PDB', '/docs/general-help/identifiers-in-pdb'),
    getItem(
      'Computed Structure Models and RCSB.org',
      '/docs/general-help/computed-structure-models-and-rcsborg',
    ),
    getItem(
      'Assessing the Quality of 3D Structures',
      '/docs/general-help/assessing-the-quality-of-3d-structures',
    ),
    getItem(
      'Data From External Resources Integrated Into RCSB PDB',
      '/docs/general-help/data-from-external-resources-integrated-into-rcsb-pdb',
    ),
    getItem(
      'Symmetry Resources in the PDB',
      '/docs/general-help/symmetry-resources-in-the-pdb',
    ),
    getItem(
      'Ligand Structure Quality in PDB Structures',
      '/docs/general-help/ligand-structure-quality-in-pdb-structures',
    ),
    getItem(
      'Web Services Overview',
      '/docs/general-help/web-services-overview',
    ),
    getItem(
      'X-ray Electron Density Maps',
      '/docs/general-help/x-ray-electron-density-maps',
    ),
    getItem(
      'Structures Without Legacy PDB Format Files',
      '/docs/general-help/structures-without-legacy-pdb-format-files',
    ),
    getItem('Deposition Resources', '/docs/general-help/deposition-resources'),
    getItem('Software Supporters', '/docs/general-help/software-supporters'),
    getItem(
      'Membrane Protein Resources',
      '/docs/general-help/membrane-protein-resources',
    ),
    getItem('Website FAQ', '/docs/general-help/website-faq'),
    getItem('Glossary', '/docs/general-help/glossary'),
  ]),
  getItem('Search and Browse', '/docs/search-and-browse', [
    getItem(
      'Overview: Search and Browse',
      '/docs/search-and-browse/overview-search-and-browse',
    ),
    getItem('Basic Search', '/docs/search-and-browse/basic-search'),
    getItem('Advanced Search', '/docs/search-and-browse/advanced-search', [
      getItem(
        'Overview: Advanced Search',
        '/docs/search-and-browse/advanced-search/overview-advanced-search',
      ),
      getItem(
        'Attribute Search',
        '/docs/search-and-browse/advanced-search/attribute-search',
      ),
      getItem(
        'Attribute Details',
        '/docs/search-and-browse/advanced-search/attribute-details',
      ),
      getItem(
        'Sequence Similarity Search',
        '/docs/search-and-browse/advanced-search/sequence-similarity-search',
      ),
      getItem(
        'Sequence Motif Search',
        '/docs/search-and-browse/advanced-search/sequence-motif-search',
      ),
      getItem(
        'Structure Similarity Search',
        '/docs/search-and-browse/advanced-search/structure-similarity-search',
      ),
      getItem(
        'Structure Motif Search',
        '/docs/search-and-browse/advanced-search/structure-motif-search',
      ),
      getItem(
        'Chemical Similarity Search',
        '/docs/search-and-browse/advanced-search/chemical-similarity-search',
      ),
      getItem(
        'Chemical Sketch Tool',
        '/docs/search-and-browse/advanced-search/chemical-sketch-tool',
      ),
      getItem(
        'Search Examples',
        '/docs/search-and-browse/advanced-search/search-examples',
      ),
    ]),
    getItem('MyPDB', '/docs/search-and-browse/mypdb'),
    getItem('Browse Options', '/docs/search-and-browse/browse-options', [
      getItem(
        'Overview: Browse',
        '/docs/search-and-browse/browse-options/overview-browse',
      ),
      getItem('ECOD', '/docs/search-and-browse/browse-options/ecod'),
      getItem(
        'Biological Process',
        '/docs/search-and-browse/browse-options/biological-process',
      ),
      getItem('SCOP2', '/docs/search-and-browse/browse-options/scop2'),
      getItem('ATC', '/docs/search-and-browse/browse-options/atc'),
      getItem('CATH', '/docs/search-and-browse/browse-options/cath'),
      getItem(
        'Cellular Component',
        '/docs/search-and-browse/browse-options/cellular-component',
      ),
      getItem(
        'Enzyme Classification',
        '/docs/search-and-browse/browse-options/enzyme-classification',
      ),
      getItem(
        'Genome Location',
        '/docs/search-and-browse/browse-options/genome-location',
      ),
      getItem('MeSH', '/docs/search-and-browse/browse-options/mesh'),
      getItem(
        'Membrane Protein (OPM)',
        '/docs/search-and-browse/browse-options/membrane-protein-opm',
      ),
      getItem(
        'Molecular Function',
        '/docs/search-and-browse/browse-options/molecular-function',
      ),
      getItem(
        'Membrane Protein (mpstruc)',
        '/docs/search-and-browse/browse-options/membrane-protein-mpstruc',
      ),
      getItem(
        'Source Organism',
        '/docs/search-and-browse/browse-options/source-organism',
      ),
      getItem(
        'Protein Symmetry',
        '/docs/search-and-browse/browse-options/protein-symmetry',
      ),
      getItem('SCOP', '/docs/search-and-browse/browse-options/scop'),
    ]),
  ]),
  getItem('Exploring a 3D Structure', '/docs/exploring-a-3d-structure', [
    getItem('Overview', '/docs/exploring-a-3d-structure/overview'),
    getItem(
      'Structure Summary Page',
      '/docs/exploring-a-3d-structure/structure-summary-page',
    ),
    getItem('3D View', '/docs/exploring-a-3d-structure/3d-view'),
    getItem('Annotations', '/docs/exploring-a-3d-structure/annotations'),
    getItem('Experiment', '/docs/exploring-a-3d-structure/experiment'),
    getItem('Sequence', '/docs/exploring-a-3d-structure/sequence'),
    getItem('Genome', '/docs/exploring-a-3d-structure/genome'),
    getItem('Ligands', '/docs/exploring-a-3d-structure/ligands'),
    getItem('Versions', '/docs/exploring-a-3d-structure/versions'),
  ]),
  getItem('3D Viewers', '/docs/3d-viewers', [
    getItem('Mol*', '/docs/3d-viewers/mol', [
      getItem('Getting Started', '/docs/3d-viewers/mol/getting-started'),
      getItem('Maneuvering in Mol*', '/docs/3d-viewers/mol/maneuvering-in-mol'),
      getItem('Making Selections', '/docs/3d-viewers/mol/making-selections'),
      getItem(
        'Navigating by Sequence',
        '/docs/3d-viewers/mol/navigating-by-sequence',
      ),
      getItem(
        'Managing the Display',
        '/docs/3d-viewers/mol/managing-the-display',
      ),
      getItem('Common Actions', '/docs/3d-viewers/mol/common-actions'),
      getItem('FAQs/Scenarios', '/docs/3d-viewers/mol/faqs-scenarios'),
      getItem('Mol* Cheat Sheet', '/docs/3d-viewers/mol/mol-cheat-sheet'),
    ]),
    getItem('NGL', '/docs/3d-viewers/ngl'),
    getItem('Jmol', '/docs/3d-viewers/jmol'),
  ]),
  getItem('Grouping Structures', '/docs/grouping-structures', [
    getItem(
      'Overview: Grouping Structures',
      '/docs/grouping-structures/overview-grouping-structures',
    ),
    getItem(
      'Sequence-based Clustering',
      '/docs/grouping-structures/sequence-based-clustering',
    ),
    getItem(
      'Grouping Search Results',
      '/docs/grouping-structures/grouping-search-results',
    ),
    getItem(
      'Group Summary Pages',
      '/docs/grouping-structures/group-summary-pages',
    ),
    getItem(
      'Groups 1D-3D Alignment',
      '/docs/grouping-structures/groups-1d-3d-alignment',
    ),
  ]),
  getItem('Sequence Viewers', '/docs/sequence-viewers', [
    getItem(
      'Protein Feature View',
      '/docs/sequence-viewers/protein-feature-view',
    ),
    getItem(
      '3D Protein Feature View',
      '/docs/sequence-viewers/3d-protein-feature-view',
    ),
    getItem('Genome View', '/docs/sequence-viewers/genome-view'),
    getItem(
      'Protein Sequence Alignment View',
      '/docs/sequence-viewers/protein-sequence-alignment-view',
    ),
  ]),
  getItem('Tools', '/docs/tools', [
    getItem(
      'Pairwise Structure Alignment',
      '/docs/tools/pairwise-structure-alignment',
    ),
  ]),
  getItem('Programmatic Access', '/docs/programmatic-access', [
    getItem(
      'File Download Services',
      '/docs/programmatic-access/file-download-services',
    ),
    getItem(
      'Web Services Overview',
      '/docs/programmatic-access/web-services-overview',
    ),
    getItem(
      'Batch Downloads with Shell Script',
      '/docs/programmatic-access/batch-downloads-with-shell-script',
    ),
    getItem(
      'Access to Legacy Theoretical Models',
      '/docs/programmatic-access/access-to-legacy-theoretical-models',
    ),
    getItem(
      'Migrating from Legacy APIs',
      '/docs/programmatic-access/migrating-from-legacy-apis',
    ),
  ]),
  getItem('Additional Resources', '/docs/additional-resources', [
    getItem('3D Printing', '/docs/additional-resources/3d-printing'),
    getItem(
      'Databases and Knowledgebases',
      '/docs/additional-resources/databases-and-knowledgebases',
    ),
    getItem(
      'Crystallography Software',
      '/docs/additional-resources/crystallography-software',
    ),
    getItem(
      'Electron Microscopy Software',
      '/docs/additional-resources/electron-microscopy-software',
    ),
    getItem(
      'Modeling and Simulation Software',
      '/docs/additional-resources/modeling-and-simulation-software',
    ),
    getItem('File Readers', '/docs/additional-resources/file-readers'),
    getItem('NMR Software', '/docs/additional-resources/nmr-software'),
    getItem(
      'Molecular Graphics Software',
      '/docs/additional-resources/molecular-graphics-software',
    ),
    getItem(
      'SARS-CoV-2 and COVID-19',
      '/docs/additional-resources/sars-cov-2-and-covid-19',
    ),
    getItem(
      'Sequence Analysis',
      '/docs/additional-resources/sequence-analysis',
    ),
    getItem(
      'Structure Classification and Analysis',
      '/docs/additional-resources/structure-classification-and-analysis',
    ),
    getItem(
      'Structure Prediction',
      '/docs/additional-resources/structure-prediction',
    ),
    getItem(
      'Data Management Standards and Best Practices',
      '/docs/additional-resources/data-management-standards-and-best-practices',
    ),
    getItem(
      'Structure Validation and Quality',
      '/docs/additional-resources/structure-validation-and-quality',
    ),
  ]),
];
