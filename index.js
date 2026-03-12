const BASE_URL = 'https://grniuyxdmotzrmdvvlkx.supabase.co/functions/v1/agentpay-api';

class AgentPay {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.headers = {
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    };
  }

  async getAgents() {
    const res = await fetch(`${BASE_URL}/agents`, { headers: this.headers });
    return res.json();
  }

  async getBalance(agentId) {
    const res = await fetch(`${BASE_URL}/balance?agent_id=${agentId}`, { headers: this.headers });
    return res.json();
  }

  async pay({ agent_id, service, amount }) {
    const res = await fetch(`${BASE_URL}/pay`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ agent_id, service, amount })
    });
    return res.json();
  }

  async getTransactions(agentId) {
    const res = await fetch(`${BASE_URL}/transactions?agent_id=${agentId}`, { headers: this.headers });
    return res.json();
  }
}

module.exports = AgentPay;
