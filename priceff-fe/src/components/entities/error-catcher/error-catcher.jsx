import {PureComponent} from 'react';

class ErrorCatcher extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.info(error, info);
  }

  render() {

    const {
      errorPage,
      children,
      lastError
    } = this.props;
    
    if (
      this.state.hasError ||
      ((lastError && lastError.data) && lastError.data.status === 500)
      ) return errorPage;

    return children;
  }
}

export { ErrorCatcher };