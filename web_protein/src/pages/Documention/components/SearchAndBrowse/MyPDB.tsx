export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse</h5>
        <h1>MyPDB</h1>
        <div>
          <a className="content-anchor" id="what-is-mypdb"></a>
          <h4>What is MyPDB?</h4>
          <p>
            MyPDB is an automated query service, wherein user defined, custom
            queries are stored and run after each weekly update of the PDB
            archive. Query results are emailed to users to alert them about
            release of new structures related to their topics/molecules of
            interest. In addition, this service can also be used to save
            composite queries for future use.
          </p>
          <a className="content-anchor" id="why-use-mypdb"></a>
          <h4>Why use MyPDB?</h4>
          <p>
            This service is useful for keeping track of current research in a
            field by receiving notification about release of new structures of a
            specific biological molecule, complex, or process of interest. It
            can also serve as a great way to save composite queries that combine
            Basic and/or Advanced search features, so that it can be quickly
            accessed and run, when needed.
          </p>
          <a className="content-anchor" id="documentation"></a>
          <h3>Documentation</h3>
          <p>
            To use the services offered in MyPDB you will need to create and
            account using one of the sign-in options described below. To sign-in
            click on the blue button (called “MyPDB”) on the top right corner of
            all pages in this website.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/6000bab4d3c1ff0cf1f44f48/mypdb-20220824.png"
                    data-toggle="lightbox"
                    data-title="MyPDB icon is available on the top right corner of all RCSB PDB pages next to the 'Contact Us"
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/6000bab4d3c1ff0cf1f44f48/mypdb-20220824.png"
                      alt="MyPDB icon is available on the top right corner of all RCSB PDB pages next to the "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  MyPDB icon is available on the top right corner of all RCSB
                  PDB pages next to the "Contact Us" button
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a className="content-anchor" id="sign-in-options"></a>
          <h4>Sign-in Options</h4>
          <p>
            MyPDB offers the ability to sign in using any one of three
            third-party service providers - Google, Facebook, or ORCID (referred
            to henceforth as the 'provider'). When signing in, a small amount of
            data is shared between the provider selected and RCSB PDB. Data
            elements that are shared and saved are listed below:
          </p>
          <a className="content-anchor" id="-google"></a>
          <h5>
            <img
              style={{ width: '3%', marginRight: '10px' }}
              className="mypdb-logo"
              src="//cdn.rcsb.org/rcsb-pdb/logos/google-sm.png"
            />
            Google
          </h5>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Name: Your display name</li>
            <li>
              Notification email: A list of one or more emails associated with
              your Google account. RCSB PDB saves the first email in the list,
              and uses that as your default email address. If you select to be
              notified on a weekly basis, any new search results from rerunning
              queries that you have saved in MyPDB this email address is used.
              You can change the notification email address at any time, without
              affecting your account sign-in preference. Email addresses other
              than the first one in the list are not saved in MyPDB.
            </li>
            <li>
              Provider ID: The Google ID is a unique numeric ID associated with
              your Google account. RCSB PDB will use this ID to identify your
              account whenever you sign in using Google.
            </li>
            <li>
              Google also returns a path to your Google profile image, but this
              is not saved in MyPDB.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="-facebook"></a>
          <h5>
            <img
              style={{ width: '3%', marginRight: '10px' }}
              className="mypdb-logo"
              src="//cdn.rcsb.org/rcsb-pdb/logos/facebook-sm.png"
            />
            Facebook
          </h5>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Name: Your display name</li>
            <li>
              Notification email: A list of one or more emails associated with
              your Facebook account. RCSB PDB saves the first email in the list,
              and uses that as your default email address. If you select to be
              notified on a weekly basis, any new search results from rerunning
              queries that you have saved in MyPDB this email address is used.
              You can change the notification email address at any time, without
              affecting your account sign-in preference. Email addresses other
              than the first one in the list are not saved in MyPDB.
            </li>
            <li>
              Provider ID: The Facebook ID is a unique numeric ID associated
              with your Facebook account. RCSB PDB will use this ID to identify
              your account whenever you sign in using Facebook.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="-orcid"></a>
          <h5>
            <img
              style={{ width: '3%', marginRight: '10px' }}
              className="mypdb-logo"
              src="//cdn.rcsb.org/rcsb-pdb/logos/orcid-sm.png"
            />
            ORCID
          </h5>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Name: Your display name (associated with your ORCID ID)</li>
            <li>
              Provider ID: The ORCID ID is a unique ID associated with your
              ORCID account. RCSB PDB will use this ID to identify your account
              whenever you sign in using ORCID.
            </li>
          </ul>
          <div></div>
          <p>
            The first time you sign in using one of these providers, your MyPDB
            account will be automatically created using the credentials that the
            provider shares with RCSB MyPDB. This account may then be used to
            save your search queries, and to rerun saved search queries, either
            manually, or by setting a notification flag on specific queries.
            Once you have signed in to your account you can save queries, and
            manage your saved queries and/or account settings.
            <br />
            <br />
            Note: Signing in with more than one provider will create separate
            MyPDB accounts. These accounts cannot be linked or merged, so
            queries saved using one account will not be visible when signed in
            to a different account.
            <br />
            <br />
            <a href="/search/mypdb">Sign-in Now</a>
          </p>
          <a className="content-anchor" id="saving-queries"></a>
          <h4>Saving Queries</h4>
          <p>
            Perform any search and save the query by clicking on the button
            “Save to MyPDB” at the top of the page in the “Query” options. If
            you have not signed in you can still click on the “Save to MyPDB”
            button and you will be directed to sign-in and save your query.
          </p>
          <a className="content-anchor" id="saved-queries"></a>
          <h4>Saved Queries</h4>
          <p>
            This page, which shows a listing of all the saved custom queries, is
            available in MyPDB from the tabs listed in the top right corner.
            Select one or more of the displayed to perform one of the following
            operations:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Rerun any of your saved queries by clicking on the Search icon or
              by clicking on the query name.
            </li>
            <li>
              Set the 'Notify' flag for selected or all queries. If the 'Notify'
              flag is checked, the query will automatically run each week,
              shortly after the RCSB PDB archive weekly update. If the search
              returns any new results based on structures released in the past
              week, you will receive an email notification listing those
              structures.
            </li>
            <li>Delete any or all of your saved queries.</li>
          </ul>
          <div></div>
          <a className="content-anchor" id="account-settings"></a>
          <h4>Account Settings</h4>
          <p>
            After logging into your MyPDB account, the Account Settings page is
            available from the tabs listed on the top right corner and shows
            details about the account. Here you can:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Update your notification email address. This address may be
              different from the email address associated with your provider
              account.
            </li>
            <li>
              View all of the data that is saved in your MyPDB account, in JSON
              format
            </li>
            <li>
              Download all of the data saved in your account in JSON format.
            </li>
            <li>
              Delete all of your saved queries. This action cannot be undone.
            </li>
            <li>
              Delete your account. If you delete your account, all saved queries
              will be deleted, in addition to the account itself. This action
              cannot be undone. However, you can create a new account at any
              time simply by signing in again using any one of the providers on
              the Sign In screen.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="faqs"></a>
          <h3>FAQs</h3>
          <p>
            <b>1. Is it safe to sign in with Google, Facebook, or ORCID?</b>
          </p>
          <p>
            The switch to third-party provider sign-on is in line with common
            current web practices. There is actually increased security and
            data-privacy protection in using third-party services. There are
            many articles that explain this reasoning in more detail, for
            example:
            https://www.avg.com/en/signal/is-it-safe-to-log-in-with-facebook-or-google.
            As the article explains, the important point to note is that RCSB
            PDB will never see your third-party provider password, or any other
            information associated with that account, other than the small
            amount of information listed in detail at the top of this page.
          </p>
          <p>
            <b>
              2. I have a personal Gmail account, but I would prefer not to use
              it in a professional context. Can I sign in using my institutional
              account?
            </b>
          </p>
          <p>
            Unfortunately that is not possible in the new MyPDB system. However,
            there are two possible ways of addressing this.
          </p>
          <ol style={{ paddingLeft: '40px' }}>
            <li>
              Gmail accounts are free and easy to create. You could create a
              Gmail account specifically for this purpose.
            </li>
            <li>
              If you wish to have automated email responses sent to your
              institutional email account from MyPDB, the “Notification” email
              address can be set on the user “Account Settings” page, and can be
              different from the account used for third-party provider sign-in.
            </li>
          </ol>
          <div></div>
          <a className="content-anchor" id="examples"></a>
          <h3>Examples</h3>
          <p>A screenshot of saved queries are shown here:</p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/6000bab4d3c1ff0cf1f44f48/screen-shot-2021-02-16-at-1.21.30-pm.png"
                    data-toggle="lightbox"
                    data-title="MyPDB Saved Query Example"
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/6000bab4d3c1ff0cf1f44f48/screen-shot-2021-02-16-at-1.21.30-pm.png"
                      alt="MyPDB Saved Query Example"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  MyPDB Saved Query Example
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            Note: Only the second query will be run on the newly released
            structures, following the archive’s weekly update. If the query
            yields any results the PDB ID and structure title it will be emailed
            to the user.
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
        <div>Last updated: 8/31/2022</div>
      </div>
    </div>
  );
};
