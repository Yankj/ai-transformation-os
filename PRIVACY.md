# 隐私与脱敏政策 / Privacy and de-identification

ATOS 的公开仓库只保存可安全分享的抽象方法、虚构案例和已授权内容。个人成长过程
可以被产品化，但不应以暴露个人、雇主或客户信息为代价。

ATOS stores only safely shareable abstractions, fictional examples, and
authorized material. Productizing a growth journey must not expose people,
employers, or customers.

## 禁止提交 / Never commit

- 真实姓名、昵称与可关联身份的组合、头像、住址、电话、邮箱、社交账号；
- 身份证件、合同、薪酬、简历原件、个人访问记录或定位信息；
- API Key、Token、Cookie、私钥、密码、内部域名或非公开仓库地址；
- 雇主、客户、同事、业务项目、订单、指标和截图中可识别的非公开信息；
- 受 NDA、劳动合同、客户协议或版权约束的材料。

## 脱敏规则 / De-identification rules

1. 用“某企业 / a company”“订单 A-100”等泛化名称替代真实实体。
2. 用范围、比例或模拟数据替代精确业务数据，除非已获书面公开授权。
3. 删除截图中的姓名、头像、组织、时间、URL、工号、会话与浏览器信息。
4. 对案例保留技术上下文和决策逻辑，删除可反向识别主体的细节。
5. 任何不确定是否可公开的内容，默认不提交，放入本地 `.local/` 并寻求确认。

## 提交前检查 / Before every commit

- 运行 `npm run verify`；该检查只覆盖常见模式，不保证发现所有敏感信息。
- 使用 `git diff --cached` 逐行审阅即将提交的内容。
- 确认示例数据、链接、截图、日志和 Git 元数据没有泄露身份或业务信息。
- AI 生成内容同样需要人工复核；不要假设 AI 已自动脱敏。

## 发现泄露时 / If a disclosure is found

1. 立即停止公开、fork 或转发该内容。
2. 按 [SECURITY.md](SECURITY.md) 私密报告，不要在公开 Issue 中粘贴敏感信息。
3. 轮换任何可能暴露的凭证，并评估 Git 历史与镜像中的影响。
4. 在确认影响范围后再进行历史清理和重新发布。
