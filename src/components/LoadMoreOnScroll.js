import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import throttle from 'lodash/throttle';
import Loading from './Loading';
import Error from './Error';

const Placeholder = styled.div`
  height: 3rem;
`;

const OFFSET_TO_LOAD_MORE_PX = 128;

class LoadMoreOnScroll extends React.Component {
  wrapperRef = React.createRef();

  loadMoreIfNeeded = () => {
    if (!this.wrapperRef.current) return;

    const { loadMore, hasMore, loading, error } = this.props;
    const wrapperEndOffset =
      this.wrapperRef.current.offsetTop + this.wrapperRef.current.offsetHeight;
    const scrollOffset =
      window.innerHeight + document.documentElement.scrollTop;

    if (
      hasMore &&
      !loading &&
      !error &&
      scrollOffset >= wrapperEndOffset - OFFSET_TO_LOAD_MORE_PX
    ) {
      loadMore();
    }
  };

  scrollListener = throttle(this.loadMoreIfNeeded, 100);

  componentDidMount() {
    this.loadMoreIfNeeded();
    window.addEventListener('scroll', this.scrollListener, {
      passive: true,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  render() {
    const { children, loading, error, hasMore } = this.props;
    return (
      <div ref={this.wrapperRef}>
        {children}
        <Placeholder>
          {error && <Error error={error} />}
          {hasMore && loading && <Loading />}
          {!hasMore && !loading && <p>Isso é tudo (:</p>}
        </Placeholder>
      </div>
    );
  }
}

LoadMoreOnScroll.propTypes = {
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
};

export default LoadMoreOnScroll;
