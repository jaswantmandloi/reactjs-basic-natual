import natural from 'natural'

export const levenshteinDesitance = ({ source, target }) => {
  return natural.LevenshteinDistance(source, target)
}

export const levenshteinDesitanceSearch = ({ source, target }) => {
  return natural.LevenshteinDistance(source, target, { search: true })
}
