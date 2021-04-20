const CONTENTTYPE_SPARQL_JSON: string = 'application/sparql-results+json';
const CONTENTTYPE_SPARQL_XML: string = 'application/sparql-results+xml';
const CONTENTTYPE_SPARQL: string = `${CONTENTTYPE_SPARQL_JSON};q=1.0,${CONTENTTYPE_SPARQL_XML};q=0.7`;

export const SparqlEndpointBindingsFetcher = async (source: string, query: string) => {
  const headers: Headers = new Headers();
  headers.append('Accept', CONTENTTYPE_SPARQL);
  const response = await fetch(source + '?query=' + encodeURIComponent(query), { headers })
  if (response.headers.get('Content-Type') !== CONTENTTYPE_SPARQL_JSON) {
    throw new Error('Response type is not yet supported');
  }

  const json = await response.json()
  return json?.results?.bindings ?? []
}