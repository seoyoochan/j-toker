var React          = require('react'),
    BS             = require('react-bootstrap'),
    Panel          = BS.Panel,
    Grid           = BS.Grid,
    Row            = BS.Row,
    Col            = BS.Col,
    Well           = BS.Well,
    SignIn         = require('../components/login-form.jsx'),
    ProfileInfo    = require('../components/profile-info.jsx'),
    SignOut        = require('../components/signout-form.jsx'),
    OAuth          = require('../components/oauth-form.jsx'),
    Registration   = require('../components/registration-form.jsx'),
    Destruction    = require('../components/destroy-account.jsx'),
    UpdateAccount  = require('../components/update-account.jsx'),
    ResetPassword  = require('../components/password-reset.jsx'),
    UpdatePassword = require('../components/password-update.jsx'),
    AccessControl  = require('../components/access-control.jsx');


module.exports = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },

  getInitialProps: {
    user: {}
  },

  render: function() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Well>
              <h1>jToker</h1>
              <h2>Simple, secure authentication for single-page apps</h2>
            </Well>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <ProfileInfo {...this.props.user} />
          </Col>

          <Col xs={12} sm={6}>
            <SignIn {...this.props.user} />
          </Col>

          <Col xs={12} sm={6}>
            <SignOut {...this.props.user} />
          </Col>

          <Col xs={12} sm={6}>
            <Destruction {...this.props.user} />
          </Col>

          <Col xs={12} sm={6}>
            <OAuth {...this.props.user} />
          </Col>

          <Col xs={12} sm={6}>
            <Registration />
          </Col>

          <Col xs={12} sm={6}>
            <ResetPassword />
          </Col>

          <Col xs={12} sm={6}>
            <UpdateAccount />
          </Col>

          <Col xs={12} sm={6}>
            <UpdatePassword {...this.props.user} />
          </Col>

          <Col xs={12} sm={6}>
            <AccessControl {...this.props.user} />
          </Col>
        </Row>
      </Grid>
    );
  }
});