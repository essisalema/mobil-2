import { OpenAI, OpenAIEmbeddings} from '@langchain/openai';
import {PDFLoader} from 'langchain/document_loaders/fs/pdf';
import {MemoryVectorStore} from 'langchain/vectorstores/memory';
import {RetrievalQAChain} from 'langchain/chains';


export const process_doc = async (filename: string | undefined, question: string) => {
    const model = new OpenAI({
        openAIApiKey: "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",
     });

    const loader = new PDFLoader(`./uploads/${filename}`, {
        splitPages: false
    })
    const doc = await loader.load()
    const vectorStore = await MemoryVectorStore.fromDocuments(doc, new OpenAIEmbeddings({
         openAIApiKey:"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",
    }))
    const vectorStoreRetriever = vectorStore.asRetriever()
    const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
    return await chain.call({
        query: question,
    })
}
