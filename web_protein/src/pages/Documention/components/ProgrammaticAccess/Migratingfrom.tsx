export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Programmatic Access</h5>
        <h1>Migrating from Legacy APIs</h1>
        <div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#legacy-apis-depreciation-note">
              Legacy APIs Depreciation Note
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#migrating-from-legacy-fetch-api">
              Migrating from Legacy Fetch API
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#migrating-from-legacy-search-api">
              Migrating from Legacy Search API
            </a>
          </div>
          <a className="content-anchor" id="legacy-apis-depreciation-note"></a>
          <h3>Legacy APIs Depreciation Note</h3>
          <p>
            Applications written on top of the Legacy Fetch and Search APIs no
            longer work because these services have been discontinued. The new
            APIs are totally revamped and are completely different from the old
            APIs. Therefore, we have updated the documentation with comparative
            examples of the legacy as well as revamped APIs. You can get started
            with the new APIs by visiting the
            <a href="https://data.rcsb.org" target="_blank">
              RCSB Data API
            </a>
            and
            <a href="https://search.rcsb.org" target="_blank">
              RCSB Search API
            </a>
            documentation pages.
          </p>
          <a
            className="content-anchor"
            id="migrating-from-legacy-fetch-api"
          ></a>
          <h3>Migrating from Legacy Fetch API</h3>
          <p>
            This migration guide describes the necessary steps to convert
            applications from using Legacy Fetch API Web Service to a new RCSB
            Data API:
            <a
              href="https://data.rcsb.org/migration-guide.html"
              target="_blank"
            >
              Legacy Fetch API Migration Guide
            </a>
            .
          </p>
          <a
            className="content-anchor"
            id="migrating-from-legacy-search-api"
          ></a>
          <h3>Migrating from Legacy Search API</h3>
          <p>
            This migration guide describes the necessary steps to convert
            applications from using Legacy Search API Web Service to a new RCSB
            Search API:
            <a
              href="https://search.rcsb.org/migration/migration-guide-legacy.html"
              target="_blank"
            >
              Legacy Search API Migration Guide
            </a>
            .
          </p>
        </div>
      </div>
      <br />
      <hr />
      <div className="item-info">
        <div>
          Please report any encountered broken links to
          <a href="mailto:info@rcsb.org">info@rcsb.org</a>
        </div>
        <div>Last updated: 5/5/2022</div>
      </div>
    </div>
  );
};
