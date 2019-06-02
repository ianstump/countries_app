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