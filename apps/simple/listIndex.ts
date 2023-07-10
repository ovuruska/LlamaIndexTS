import { Document } from "@llamaindex/core/src/Node";
import { ListIndex, ListRetrieverMode } from "@llamaindex/core/src/index/list";
import essay from "./essay";

async function main() {
  const document = new Document({ text: essay });
  const index = await ListIndex.fromDocuments([document]);
  const queryEngine = index.asQueryEngine(ListRetrieverMode.LLM);
  const response = await queryEngine.aquery(
    "What did the author do growing up?"
  );
  console.log(response.toString());
}

main().catch((e: Error) => {
  console.error(e, e.stack);
});