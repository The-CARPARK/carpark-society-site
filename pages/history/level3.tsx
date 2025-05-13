import Layout from "@/components/layout";

export default function Level3Page() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Underground Tunnels Beneath and Around Bond Street</h1>
      <p>This level explores the hidden infrastructure and buried history beneath Bond Street in Wellington. Key features include:</p>
      <ul className="list-disc pl-6 mt-2">
        <li><strong>Waimapihi Stream Culvert:</strong> An old brick-lined tunnel carrying the Waimapihi Stream beneath the city, with cultural and ecological significance.</li>
        <li><strong>1990s Microtunnel:</strong> A hand-mined stormwater tunnel under Bond Street, designed to alleviate flooding while preserving archaeological layers.</li>
        <li><strong>Subterranean Heritage:</strong> Wartime shelters, Victorian drains, and foundations from Wellington’s past discovered during modern excavation projects.</li>
        <li><strong>Urban Risks:</strong> Earthquakes and flooding threaten these aging underground systems; engineers maintain them with camera inspections and future-proofing plans.</li>
        <li><strong>Public Memory:</strong> Efforts like murals and historical trails keep the story of these hidden tunnels alive.</li>
      </ul>
      <p className="mt-4">The full report includes mapping data, utility records, and cultural analysis. For the Watchers, Bond Street is more than just a laneway—it’s a layered portal beneath the surface of the city.</p>
    </Layout>
  );
}
