export function formatDate(unformattedDate: string) {
  const date = new Date(unformattedDate);

  const formattedData = date
    .toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replaceAll("de", "");

  return formattedData;
}
