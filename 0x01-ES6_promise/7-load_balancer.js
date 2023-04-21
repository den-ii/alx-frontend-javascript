export default async function loadBalancer(chinaDownload, USDownload) {
  const value = await Promise.any([chinaDownload, USDownload]);
  return value;
}
