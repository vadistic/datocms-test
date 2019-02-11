import { graphql, StaticQuery } from 'gatsby'
import { Box, Text } from 'grommet'
import { Paragraph } from 'grommet/components/Paragraph'
import React from 'react'
import { FooterQuery } from '../generated/graphql'
import { Idx } from '../utils'

export const Footer: React.FC = () => (
  <StaticQuery<Idx<FooterQuery>> query={FOOTER_QUERY}>
    {data => (
      <Box as="footer" align="center">
        <Paragraph size="small" textAlign="center" margin="none">
          {data.datoCmsHomePage.copyright}
        </Paragraph>
      </Box>
    )}
  </StaticQuery>
)

const FOOTER_QUERY = graphql`
  query FooterQuery {
    datoCmsHomePage {
      copyright
    }
  }
`
