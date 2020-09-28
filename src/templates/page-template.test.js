import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import * as gMdx from 'gatsby-plugin-mdx';
import PageTemplate from './page-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import mdx from '../../jest/__fixtures__/mdx';

jest.spyOn(gMdx, 'MdxRenderer').mockReturnValue('coucou');

describe('PageTemplate', () => {
  const props = {
    data: {
      ...mdx
    }
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }) => (
        render(siteMetadata)
      ),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<PageTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
