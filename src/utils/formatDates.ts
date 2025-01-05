export const formatDate = (date: string | undefined) => {
  return new Date(date).toLocaleDateString('fr-FR')
}
