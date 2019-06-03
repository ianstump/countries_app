export const GET_COUNTRIES = `
    {
        countries {
            name
            code
        }
    
    }
    
`;

export const GET_CONTINENTS = `
{
    continents {
        code
        name
          countries {
          code
          name
        }
      }
    }
`


export const GET_DETAILS = (selected) => `
{
  country(code: "${selected}") {
    name
    native
    emoji
    currency
    languages {
      code
      name
    }
}
}
`;
