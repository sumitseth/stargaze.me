import React from 'react';
import PropTypes from 'prop-types';
import RepositoryItemComponent from '../repositoryItem/repositoryItem.component';
import { repositoriesListTestSelectors } from './respositoryList.testSelectors';

export const RepositoriesList = ({ repositories, onAddStar, onRemoveStar }) => {
  return (
    <ul data-testid={repositoriesListTestSelectors.list}>
      {repositories.nodes.map(
        ({ name, description, url, id, viewerHasStarred }) => (
          <RepositoryItemComponent
            name={name}
            description={description}
            url={url}
            viewerHasStarred={viewerHasStarred}
            key={id}
            onAddStar={onAddStar ? () => onAddStar(id) : null}
            onRemoveStar={onRemoveStar ? () => onRemoveStar(id) : null}
          />
        )
      )}
    </ul>
  );
};

RepositoriesList.propTypes = {
  repositories: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        viewerHasStarred: PropTypes.bool.isRequired,
        description: PropTypes.string,
      })
    ),
    pageInfo: PropTypes.shape({
      endCursor: PropTypes.string,
      hasNextPage: PropTypes.bool,
      __typename: PropTypes.string,
    }),
    repositoryCount: PropTypes.number,
    __typename: PropTypes.string,
  }),
  onAddStar: PropTypes.func,
  onRemoveStar: PropTypes.func,
};

export default RepositoriesList;
