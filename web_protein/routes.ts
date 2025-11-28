export default [
  {
    title: 'menu.pages.verifyEmail',
    path: '/verify-email',
    component: '@/pages/VerifyEmail',
  },
  {
    title: 'menu.pages.access',
    path: '/access',
    component: '@/pages/AccessCode',
  },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        title: 'menu.user.login',
        path: '/user/login',
        component: '@/pages/Login',
      },
      {
        title: 'menu.user.register',
        path: '/user/register',
        component: '@/pages/Register',
      },
      {
        path: '/construction',
        title: 'menu.pages.construction',
        component: '@/pages/Under',
      },
      { title: 'menu.pages.index', path: '/', component: '@/pages/Index' },
      {
        title: 'menu.pages.highlights',
        path: '/highlights',
        component: '@/pages/Highlights',
      },
      {
        title: 'menu.pages.news',
        path: '/news',
        component: '@/pages/News',
      },
      {
        title: 'menu.pages.structure',
        path: '/entry/:current/:id',
        component: '@/pages/entry',
      },
      {
        title: 'menu.pages.ligand',
        path: '/ligand/:id',
        component: '@/pages/Structure/Ligand',
      },
      {
        title: 'menu.pages.bird',
        path: '/ligand/bird/:id',
        component: '@/pages/Structure/Bird',
      },
      {
        title: 'menu.pages.unreleased',
        path: '/unreleased/:id',
        component: '@/pages/Structure/Unreleased',
      },
      {
        title: 'menu.pages.removed',
        path: '/structure/removed/:id',
        component: '@/pages/Structure/Removed',
      },
      {
        title: 'menu.pages.chemical-sketch',
        path: '/chemical-draw-tool',
        component: '@/pages/ChemicalSketch',
      },
      {
        title: 'menu.pages.search',
        path: '/search',
        component: '@/pages/Search',
      },
      {
        title: 'menu.pages.stats',
        path: '/stats',
        component: '@/pages/Stats',
      },
      {
        title: 'menu.pages.personalInfo',
        path: '/personal-info',
        component: '@/pages/PersonalInfo',
      },
      {
        title: 'menu.pages.myPDB',
        path: '/my-pdb-entry',
        component: '@/pages/MyPDB',
      },
      {
        title: 'menu.pages.collect',
        path: '/collect',
        component: '@/pages/Collect',
      },
      {
        title: 'menu.pages.subscribe',
        path: '/subscibe',
        component: '@/pages/Subscribe',
      },
      {
        title: 'menu.pages.downloads',
        path: '/downloads',
        component: '@/pages/Downloads',
      },
      {
        title: 'menu.pages.docs',
        path: '/docs',
        component: '@/pages/Documention',
        routes: [
          {
            path: '/docs',
            redirect: '/docs/general-help',
          },
          {
            title: 'menu.pages.docs.general-help',
            path: '/docs/general-help',
            routes: [
              {
                path: '/docs/general-help',
                redirect:
                  '/docs/general-help/organization-of-3d-structures-in-the-protein-data-bank',
              },
              {
                path: '/docs/general-help/organization-of-3d-structures-in-the-protein-data-bank',
                title: 'menu.pages.protein-data-bank',
                component:
                  '@/pages/Documention/components/GeneralHelp/DataBank',
              },
              {
                path: '/docs/general-help/identifiers-in-pdb',
                title: 'menu.pages.identifiers-in-pdb',
                component:
                  '@/pages/Documention/components/GeneralHelp/IdentifiersInPDB',
              },
              {
                path: '/docs/general-help/computed-structure-models-and-rcsborg',
                title: 'menu.pages.computed-structure-models-and-rcsborg',
                component:
                  '@/pages/Documention/components/GeneralHelp/ComputedStructure',
              },
              {
                path: '/docs/general-help/assessing-the-quality-of-3d-structures',
                title: 'menu.pages.assessing-the-quality-of-3d-structures',
                component:
                  '@/pages/Documention/components/GeneralHelp/AssessingTheQuality',
              },
              {
                path: '/docs/general-help/data-from-external-resources-integrated-into-rcsb-pdb',
                title:
                  'menu.pages.data-from-external-resources-integrated-into-rcsb-pdb',
                component:
                  '@/pages/Documention/components/GeneralHelp/DataFromExternal',
              },
              {
                path: '/docs/general-help/symmetry-resources-in-the-pdb',
                title: 'menu.pages.symmetry-resources-in-the-pdb',
                component:
                  '@/pages/Documention/components/GeneralHelp/SymmetryResources',
              },
              {
                path: '/docs/general-help/ligand-structure-quality-in-pdb-structures',
                title: 'menu.pages.ligand-structure-quality-in-pdb-structures',
                component:
                  '@/pages/Documention/components/GeneralHelp/LigandStructure',
              },
              {
                path: '/docs/general-help/web-services-overview',
                title: 'menu.pages.web-services-overview',
                component:
                  '@/pages/Documention/components/GeneralHelp/WebServicesOverview',
              },
              {
                path: '/docs/general-help/x-ray-electron-density-maps',
                title: 'menu.pages.x-ray-electron-density-maps',
                component:
                  '@/pages/Documention/components/GeneralHelp/XRayElectron',
              },
              {
                path: '/docs/general-help/structures-without-legacy-pdb-format-files',
                title: 'menu.pages.structures-without-legacy-pdb-format-files',
                component:
                  '@/pages/Documention/components/GeneralHelp/StructuresWithout',
              },
              {
                path: '/docs/general-help/deposition-resources',
                title: 'menu.pages.deposition-resources',
                component:
                  '@/pages/Documention/components/GeneralHelp/DepositionResources',
              },
              {
                path: '/docs/general-help/software-supporters',
                title: 'menu.pages.software-supporters',
                component:
                  '@/pages/Documention/components/GeneralHelp/SoftwareSupporters',
              },
              {
                path: '/docs/general-help/membrane-protein-resources',
                title: 'menu.pages.membrane-protein-resources',
                component:
                  '@/pages/Documention/components/GeneralHelp/MembraneProteinResources',
              },
              {
                path: '/docs/general-help/website-faq',
                title: 'menu.pages.website-faq',
                component:
                  '@/pages/Documention/components/GeneralHelp/WebsiteFAQ',
              },
              {
                path: '/docs/general-help/glossary',
                title: 'menu.pages.glossary',
                component:
                  '@/pages/Documention/components/GeneralHelp/Glossary',
              },
            ],
          },
          {
            title: 'menu.pages.docs.search-and-browse',
            path: '/docs/search-and-browse',
            routes: [
              {
                path: '/docs/search-and-browse',
                redirect: '/docs/search-and-browse/overview-search-and-browse',
              },
              {
                path: '/docs/search-and-browse/overview-search-and-browse',
                title: 'menu.pages.overview-search-and-browse',
                component:
                  '@/pages/Documention/components/SearchAndBrowse/Overview',
              },
              {
                path: '/docs/search-and-browse/basic-search',
                title: 'menu.pages.basic-search',
                component:
                  '@/pages/Documention/components/SearchAndBrowse/BasicSearch',
              },
              {
                path: '/docs/search-and-browse/advanced-search',
                title: 'menu.pages.advanced-search',
                routes: [
                  {
                    path: '/docs/search-and-browse/advanced-search',
                    redirect:
                      '/docs/search-and-browse/advanced-search/overview-advanced-search',
                  },
                  {
                    path: '/docs/search-and-browse/advanced-search/overview-advanced-search',
                    title: 'menu.pages.overview-advanced-search',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/AdvancedSearch/Overview',
                  },
                  {
                    path: '/docs/search-and-browse/advanced-search/attribute-search',
                    title: 'menu.pages.attribute-search',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/AdvancedSearch/AttributeSearch',
                  },
                  {
                    path: '/docs/search-and-browse/advanced-search/attribute-search',
                    title: 'menu.pages.attribute-search',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/AdvancedSearch/AttributeSearch',
                  },
                  {
                    path: '/docs/search-and-browse/advanced-search/attribute-details',
                    title: 'menu.pages.attribute-details',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/AdvancedSearch/AttributeDetails/AttributeDetails',
                  },
                  {
                    path: '/docs/search-and-browse/advanced-search/sequence-similarity-search',
                    title: 'menu.pages.sequence-similarity-search',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/AdvancedSearch/SequenceSimilaritySearch',
                  },
                  {
                    path: '/docs/search-and-browse/advanced-search/sequence-motif-search',
                    title: 'menu.pages.sequence-motif-search',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/AdvancedSearch/SequenceMotifSearch',
                  },
                  {
                    path: '/docs/search-and-browse/advanced-search/structure-similarity-search',
                    title: 'menu.pages.structure-similarity-search',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/AdvancedSearch/StructureSimilaritySearch',
                  },
                  {
                    path: '/docs/search-and-browse/advanced-search/structure-motif-search',
                    title: 'menu.pages.structure-motif-search',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/AdvancedSearch/StructureMotifSearch',
                  },
                  {
                    path: '/docs/search-and-browse/advanced-search/chemical-similarity-search',
                    title: 'menu.pages.chemical-similarity-search',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/AdvancedSearch/ChemicalSimilaritySearch',
                  },
                  {
                    path: '/docs/search-and-browse/advanced-search/chemical-sketch-tool',
                    title: 'menu.pages.chemical-sketch-tool',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/AdvancedSearch/ChemicalSketchTool',
                  },
                  {
                    path: '/docs/search-and-browse/advanced-search/search-examples',
                    title: 'menu.pages.search-examples',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/AdvancedSearch/SearchExamples',
                  },
                ],
              },
              {
                path: '/docs/search-and-browse/mypdb',
                title: 'menu.pages.mypdb',
                component:
                  '@/pages/Documention/components/SearchAndBrowse/MyPDB',
              },
              {
                path: '/docs/search-and-browse/browse-options',
                title: 'menu.pages.docs.browse-options',
                routes: [
                  {
                    path: '/docs/search-and-browse/browse-options',
                    redirect:
                      '/docs/search-and-browse/browse-options/overview-browse',
                  },
                  {
                    path: '/docs/search-and-browse/browse-options/overview-browse',
                    title: 'menu.pages.overview-browse',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/BrowseOptions/Overview',
                  },
                  {
                    path: '/docs/search-and-browse/browse-options/ecod',
                    title: 'menu.pages.ecod',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/BrowseOptions/ECOD',
                  },
                  {
                    path: '/docs/search-and-browse/browse-options/biological-process',
                    title: 'menu.pages.biological-process',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/BrowseOptions/BiologicalProcess',
                  },
                  {
                    path: '/docs/search-and-browse/browse-options/scop2',
                    title: 'menu.pages.scop2',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/BrowseOptions/SCOP2',
                  },
                  {
                    path: '/docs/search-and-browse/browse-options/atc',
                    title: 'menu.pages.atc',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/BrowseOptions/ATC',
                  },
                  {
                    path: '/docs/search-and-browse/browse-options/cath',
                    title: 'menu.pages.cath',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/BrowseOptions/CATH',
                  },
                  {
                    path: '/docs/search-and-browse/browse-options/cellular-component',
                    title: 'menu.pages.cellular-component',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/BrowseOptions/CellularComponent',
                  },
                  {
                    path: '/docs/search-and-browse/browse-options/enzyme-classification',
                    title: 'menu.pages.enzyme-classification',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/BrowseOptions/EnzymeClassification',
                  },
                  {
                    path: '/docs/search-and-browse/browse-options/genome-location',
                    title: 'menu.pages.genome-location',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/BrowseOptions/GenomeLocation',
                  },
                  {
                    path: '/docs/search-and-browse/browse-options/mesh',
                    title: 'menu.pages.mesh',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/BrowseOptions/MeSH',
                  },
                  {
                    path: '/docs/search-and-browse/browse-options/membrane-protein-opm',
                    title: 'menu.pages.membrane-protein-opm',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/BrowseOptions/MembraneProtein',
                  },
                  {
                    path: '/docs/search-and-browse/browse-options/molecular-function',
                    title: 'menu.pages.molecular-function',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/BrowseOptions/MolecularFunction',
                  },
                  {
                    path: '/docs/search-and-browse/browse-options/membrane-protein-mpstruc',
                    title: 'menu.pages.molecular-function',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/BrowseOptions/MembraneProteinMpstruc',
                  },
                  {
                    path: '/docs/search-and-browse/browse-options/source-organism',
                    title: 'menu.pages.source-organism',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/BrowseOptions/SourceOrganism',
                  },
                  {
                    path: '/docs/search-and-browse/browse-options/protein-symmetry',
                    title: 'menu.pages.protein-symmetry',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/BrowseOptions/ProteinSymmetry',
                  },
                  {
                    path: '/docs/search-and-browse/browse-options/scop',
                    title: 'menu.pages.scop',
                    component:
                      '@/pages/Documention/components/SearchAndBrowse/BrowseOptions/SCOP',
                  },
                ],
              },
            ],
          },
          {
            title: 'menu.pages.exploring-a-3d-structure',
            path: '/docs/exploring-a-3d-structure',
            routes: [
              {
                path: '/docs/exploring-a-3d-structure',
                redirect: '/docs/exploring-a-3d-structure/overview',
              },
              {
                path: '/docs/exploring-a-3d-structure/overview',
                title: 'menu.pages.overview',
                component:
                  '@/pages/Documention/components/ExploringA3DStructure/Overview',
              },
              {
                path: '/docs/exploring-a-3d-structure/structure-summary-page',
                title: 'menu.pages.structure-summary-page',
                component:
                  '@/pages/Documention/components/ExploringA3DStructure/StructureSummaryPage',
              },
              {
                path: '/docs/exploring-a-3d-structure/3d-view',
                title: 'menu.pages.3d-view',
                component:
                  '@/pages/Documention/components/ExploringA3DStructure/View3D',
              },
              {
                path: '/docs/exploring-a-3d-structure/annotations',
                title: 'menu.pages.annotations',
                component:
                  '@/pages/Documention/components/ExploringA3DStructure/Annotations',
              },
              {
                path: '/docs/exploring-a-3d-structure/experiment',
                title: 'menu.pages.experiment',
                component:
                  '@/pages/Documention/components/ExploringA3DStructure/Experiment',
              },
              {
                path: '/docs/exploring-a-3d-structure/sequence',
                title: 'menu.pages.sequence',
                component:
                  '@/pages/Documention/components/ExploringA3DStructure/Sequence',
              },
              {
                path: '/docs/exploring-a-3d-structure/genome',
                title: 'menu.pages.genome',
                component:
                  '@/pages/Documention/components/ExploringA3DStructure/Genome',
              },
              {
                path: '/docs/exploring-a-3d-structure/ligands',
                title: 'menu.pages.ligands',
                component:
                  '@/pages/Documention/components/ExploringA3DStructure/Ligands',
              },
              {
                path: '/docs/exploring-a-3d-structure/versions',
                title: 'menu.pages.versions',
                component:
                  '@/pages/Documention/components/ExploringA3DStructure/Versions',
              },
            ],
          },
          {
            title: 'menu.pages.3d-viewers',
            path: '/docs/3d-viewers',
            routes: [
              { path: '/docs/3d-viewers', redirect: '/docs/3d-viewers/mol' },
              {
                path: '/docs/3d-viewers/mol',
                title: 'menu.pages.mol',
                routes: [
                  {
                    path: '/docs/3d-viewers/mol',
                    redirect: '/docs/3d-viewers/mol/getting-started',
                  },
                  {
                    title: 'menu.pages.getting-started',
                    path: '/docs/3d-viewers/mol/getting-started',
                    component:
                      '@/pages/Documention/components/Viewers3D/Mol/GettingStarted',
                  },
                  {
                    title: 'menu.pages.maneuvering-in-mol',
                    path: '/docs/3d-viewers/mol/maneuvering-in-mol',
                    component:
                      '@/pages/Documention/components/Viewers3D/Mol/ManeuveringInMol',
                  },
                  //TOOD
                  {
                    title: 'menu.pages.making-selections',
                    path: '/docs/3d-viewers/mol/making-selections',
                    component:
                      '@/pages/Documention/components/Viewers3D/Mol/MakingSelections',
                  },
                  {
                    title: 'menu.pages.navigating-by-sequence',
                    path: '/docs/3d-viewers/mol/navigating-by-sequence',
                    component:
                      '@/pages/Documention/components/Viewers3D/Mol/NavigatingbySequence',
                  },
                  {
                    title: 'menu.pages.managing-the-display',
                    path: '/docs/3d-viewers/mol/managing-the-display',
                    component:
                      '@/pages/Documention/components/Viewers3D/Mol/ManagingTheDisplay',
                  },
                  {
                    title: 'menu.pages.common-actions',
                    path: '/docs/3d-viewers/mol/common-actions',
                    component:
                      '@/pages/Documention/components/Viewers3D/Mol/CommonActions',
                  },
                  {
                    title: 'menu.pages.faqs-scenarios',
                    path: '/docs/3d-viewers/mol/faqs-scenarios',
                    component:
                      '@/pages/Documention/components/Viewers3D/Mol/FAQsScenarios',
                  },
                  {
                    title: 'menu.pages.mol-cheat-sheet',
                    path: '/docs/3d-viewers/mol/mol-cheat-sheet',
                    component:
                      '@/pages/Documention/components/Viewers3D/Mol/MolCheatSheet',
                  },
                ],
              },
              {
                path: '/docs/3d-viewers/ngl',
                title: 'menu.pages.ngl',
                component: '@/pages/Documention/components/Viewers3D/NGL/NGL',
              },
              {
                path: '/docs/3d-viewers/jmol',
                title: 'menu.pages.jmol',
                component: '@/pages/Documention/components/Viewers3D/Jmol',
              },
            ],
          },
          {
            title: 'menu.pages.grouping-structures',
            path: '/docs/grouping-structures',
            routes: [
              {
                path: '/docs/grouping-structures',
                redirect:
                  '/docs/grouping-structures/overview-grouping-structures',
              },
              {
                path: '/docs/grouping-structures/overview-grouping-structures',
                title: 'menu.pages.overview-grouping-structures',
                component:
                  '@/pages/Documention/components/GroupingStructures/Overview',
              },
              {
                path: '/docs/grouping-structures/sequence-based-clustering',
                title: 'menu.pages.sequence-based-clustering',
                component:
                  '@/pages/Documention/components/GroupingStructures/SequenceBasedClustering',
              },
              {
                path: '/docs/grouping-structures/grouping-search-results',
                title: 'menu.pages.grouping-search-results',
                component:
                  '@/pages/Documention/components/GroupingStructures/GroupingSearchResults',
              },
              {
                path: '/docs/grouping-structures/group-summary-pages',
                title: 'menu.pages.group-summary-pages',
                component:
                  '@/pages/Documention/components/GroupingStructures/GroupSummaryPages',
              },
              {
                path: '/docs/grouping-structures/groups-1d-3d-alignment',
                title: 'menu.pages.groups-1d-3d-alignment',
                component:
                  '@/pages/Documention/components/GroupingStructures/Groups1D3DAlignment',
              },
            ],
          },
          {
            title: 'menu.pages.sequence-viewers',
            path: '/docs/sequence-viewers',
            routes: [
              {
                path: '/docs/sequence-viewers',
                redirect: '/docs/sequence-viewers/protein-feature-view',
              },
              {
                path: '/docs/sequence-viewers/protein-feature-view',
                title: 'menu.pages.protein-feature-view',
                component:
                  '@/pages/Documention/components/SequenceViewers/ProteinFeatureView',
              },
              {
                path: '/docs/sequence-viewers/3d-protein-feature-view',
                title: 'menu.pages.3d-protein-feature-view',
                component:
                  '@/pages/Documention/components/SequenceViewers/ProteinFeatureView3D',
              },
              {
                path: '/docs/sequence-viewers/genome-view',
                title: 'menu.pages.genome-view',
                component:
                  '@/pages/Documention/components/SequenceViewers/GenomeView',
              },
              {
                path: '/docs/sequence-viewers/protein-sequence-alignment-view',
                title: 'menu.pages.protein-sequence-alignment-view',
                component:
                  '@/pages/Documention/components/SequenceViewers/ProteinSequence',
              },
            ],
          },
          {
            title: 'menu.pages.tools',
            path: '/docs/tools',
            routes: [
              {
                path: '/docs/tools',
                redirect: '/docs/tools/pairwise-structure-alignment',
              },
              {
                path: '/docs/tools/pairwise-structure-alignment',
                title: 'menu.pages.pairwise-structure-alignment',
                component:
                  '@/pages/Documention/components/Tools/PairwiseStructure',
              },
            ],
          },
          {
            title: 'menu.pages.programmatic-access',
            path: '/docs/programmatic-access',
            routes: [
              {
                path: '/docs/programmatic-access',
                redirect: '/docs/programmatic-access/file-download-services',
              },
              {
                path: '/docs/programmatic-access/file-download-services',
                name: 'menu.pages.file-download-services',
                component:
                  '@/pages/Documention/components/ProgrammaticAccess/FileDownload',
              },
              {
                path: '/docs/programmatic-access/web-services-overview',
                name: 'menu.pages.web-services-overview',
                component:
                  '@/pages/Documention/components/ProgrammaticAccess/WebServices',
              },
              {
                path: '/docs/programmatic-access/batch-downloads-with-shell-script',
                name: 'menu.pages.batch-downloads-with-shell-script',
                component:
                  '@/pages/Documention/components/ProgrammaticAccess/BatchDownloads',
              },
              {
                path: '/docs/programmatic-access/access-to-legacy-theoretical-models',
                name: 'menu.pages.access-to-legacy-theoretical-models',
                component:
                  '@/pages/Documention/components/ProgrammaticAccess/Accessto',
              },
              {
                path: '/docs/programmatic-access/migrating-from-legacy-apis',
                name: 'menu.pages.migrating-from-legacy-apis',
                component:
                  '@/pages/Documention/components/ProgrammaticAccess/Migratingfrom',
              },
            ],
          },
          {
            title: 'menu.pages.additional-resources',
            path: '/docs/additional-resources',
            routes: [
              {
                path: '/docs/additional-resources',
                redirect: '/docs/additional-resources/3d-printing',
              },
              {
                path: '/docs/additional-resources/3d-printing',
                title: 'menu.pages.3d-printing',
                component:
                  '@/pages/Documention/components/AdditionalResources/Printing3D',
              },
              {
                path: '/docs/additional-resources/databases-and-knowledgebases',
                title: 'menu.pages.databases-and-knowledgebases',
                component:
                  '@/pages/Documention/components/AdditionalResources/DatabasesKnowledgebases',
              },
              {
                path: '/docs/additional-resources/crystallography-software',
                title: 'menu.pages.crystallography-software',
                component:
                  '@/pages/Documention/components/AdditionalResources/CrystallographySoftware',
              },
              {
                path: '/docs/additional-resources/electron-microscopy-software',
                title: 'menu.pages.electron-microscopy-software',
                component:
                  '@/pages/Documention/components/AdditionalResources/ElectronMicroscopy',
              },
              {
                path: '/docs/additional-resources/modeling-and-simulation-software',
                title: 'menu.pages.modeling-and-simulation-software',
                component:
                  '@/pages/Documention/components/AdditionalResources/ModelingSimulation',
              },
              {
                path: '/docs/additional-resources/file-readers',
                title: 'menu.pages.file-readers',
                component:
                  '@/pages/Documention/components/AdditionalResources/FileReaders',
              },
              {
                path: '/docs/additional-resources/nmr-software',
                title: 'menu.pages.nmr-software',
                component:
                  '@/pages/Documention/components/AdditionalResources/NMRSoftware',
              },
              {
                path: '/docs/additional-resources/molecular-graphics-software',
                title: 'menu.pages.molecular-graphics-software',
                component:
                  '@/pages/Documention/components/AdditionalResources/MolecularGraphics',
              },
              {
                path: '/docs/additional-resources/sars-cov-2-and-covid-19',
                title: 'menu.pages.sars-cov-2-and-covid-19',
                component:
                  '@/pages/Documention/components/AdditionalResources/SARS',
              },
              {
                path: '/docs/additional-resources/sequence-analysis',
                title: 'menu.pages.sequence-analysis',
                component:
                  '@/pages/Documention/components/AdditionalResources/SequenceAnalysis',
              },
              {
                path: '/docs/additional-resources/structure-classification-and-analysis',
                title: 'menu.pages.structure-classification-and-analysis',
                component:
                  '@/pages/Documention/components/AdditionalResources/StructureClassification',
              },
              {
                path: '/docs/additional-resources/structure-prediction',
                title: 'menu.pages.structure-prediction',
                component:
                  '@/pages/Documention/components/AdditionalResources/StructurePrediction',
              },
              {
                path: '/docs/additional-resources/data-management-standards-and-best-practices',
                title:
                  'menu.pages.data-management-standards-and-best-practices',
                component:
                  '@/pages/Documention/components/AdditionalResources/DataManagement',
              },
              {
                path: '/docs/additional-resources/structure-validation-and-quality',
                title: 'menu.pages.structure-validation-and-quality',
                component:
                  '@/pages/Documention/components/AdditionalResources/StructureValidation',
              },
            ],
          },
        ],
      },
    ],
  },
];
