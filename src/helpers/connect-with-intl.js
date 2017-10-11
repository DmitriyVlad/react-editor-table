import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

function connectWithIntl(mapStateToProps, mapDispatchToProps) {
  return component =>
    injectIntl(connect(mapStateToProps, mapDispatchToProps)(component));
}

export default connectWithIntl;
