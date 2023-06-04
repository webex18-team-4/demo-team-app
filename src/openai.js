import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({
  organization: "", //Organizationには所属していない
  apiKey: "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", //作成したAPIキー
})

//モデルを呼び出す時にUser-Agentのエラーが出るので、"User-Agent"オプションを削除
delete configuration.baseOptions.headers["User-Agent"]

export const openai = new OpenAIApi(configuration) //openaiをQuizAppで使うためにexportする
