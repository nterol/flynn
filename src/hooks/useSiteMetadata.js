import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            subtitle
            description
            socials {
              linkedin
              github
            }
          }
        }
      }
    `
  )
  return data;
}

export default useSiteMetadata
