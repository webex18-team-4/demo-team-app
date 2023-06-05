import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({
  organization: "", //Organizationには所属していない
  apiKey: "", //作成したAPIキー
})

//モデルを呼び出す時にUser-Agentのエラーが出るので、"User-Agent"オプションを削除
delete configuration.baseOptions.headers["User-Agent"]

export const openai = new OpenAIApi(configuration) //openaiをQuizAppで使うためにexportする
