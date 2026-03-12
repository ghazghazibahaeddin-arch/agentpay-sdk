# agentpay-sdk

SDK for AgentPay — Give every AI Agent its own wallet.

## Installation

```bash
npm install agentpay-sdk
Quick Start
const AgentPay = require('agentpay-sdk')

const ap = new AgentPay('your_api_key')

// Get all agents
const agents = await ap.getAgents()

// Check balance
const balance = await ap.getBalance('agent_id')

// Pay for service
const result = await ap.pay({
  agent_id: 'agent_id',
  service: 'Text Summary',
  amount: 2
})

// Get transactions
const txs = await ap.getTransactions('agent_id')
API
Method
Description
getAgents()
Get all your agents
getBalance(agentId)
Get agent balance
pay({ agent_id, service, amount })
Pay for a service
getTransactions(agentId)
Get transaction history
Links
Website: https://agent-purse.vercel.app
Docs: https://agent-purse.vercel.app/docs
