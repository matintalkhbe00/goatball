interface TokenPhonePair {
  token: string;
  phone: string;
}

const tokenPhonePairs: TokenPhonePair[] = [
  { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlZjQ0MmU1MDIzMDkwNjNkODkwNzJmIiwiaWF0IjoxNzI3MDg2MTU5LCJleHAiOjE3MjcxNzI1NTksInR5cGUiOiJhY2Nlc3MifQ.eUrmRQhBtBq-uH0S1RoOfSsoRo6hCaunWVnFW8A6F6Q", phone: "09059549183" },
  { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlN2ZhYzI2M2Y3Mzg1MGY4YjJjYTRiIiwiaWF0IjoxNzI3MDg3MjQzLCJleHAiOjE3MjcxNzM2NDMsInR5cGUiOiJhY2Nlc3MifQ._5dKgndhahz5eCGjOqcF9qngi8kLq3k6cjOTnY2vmqk", phone: "09025967864" },
  { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZkZGZiNjYxZjdmMGYxNGZmYzkxNDAyIiwiaWF0IjoxNzI3MDg3ODczLCJleHAiOjE3MjcxNzQyNzMsInR5cGUiOiJhY2Nlc3MifQ.5T8maHwUF6Prt9T-KtaQAyGXqYKlKoxFl1e7AkBeKUk", phone: "09912984617" },
  { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlN2Y2OThmZjM0YmE2YzMyYzM3ZGFmIiwiaWF0IjoxNzI3MDg4MDUxLCJleHAiOjE3MjcxNzQ0NTEsInR5cGUiOiJhY2Nlc3MifQ.Ql0gEyia5_6yMimfSLUH3MO1RR-49arZAqb1UT1B6ZU", phone: "09964711498" },
  { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlYzEwNTc2M2Y3Mzg1MGY4M2ZkN2Y1IiwiaWF0IjoxNzI3MDg4MTk1LCJleHAiOjE3MjcxNzQ1OTUsInR5cGUiOiJhY2Nlc3MifQ.-kJ41tA5-va-J67PtDem40QvKr7R9TyhA_VxNe9VvGQ", phone: "09197473984" },
  { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlYzE2M2E5YTlkNTdkOTNmZmJhZDcxIiwiaWF0IjoxNzI3MDg4MzQ2LCJleHAiOjE3MjcxNzQ3NDYsInR5cGUiOiJhY2Nlc3MifQ.GQg3Hir-I87VMTM1r1xd_SqLGB5HUaHKrNdYTMVaxnY", phone: "09036567864" },
  { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlYzE4YTM5YTlkNTdkOTNmMDAzODU4IiwiaWF0IjoxNzI3MDg4NDgwLCJleHAiOjE3MjcxNzQ4ODAsInR5cGUiOiJhY2Nlc3MifQ.vFctpVA7weAeer1ZJiDXTMoKY8RR3wY0_1DWzOENqf4", phone: "09357792770" },
  { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlZTAzZDk1NGI2OTAxNzgwMDk5ZWE5IiwiaWF0IjoxNzI3MDg4NjEzLCJleHAiOjE3MjcxNzUwMTMsInR5cGUiOiJhY2Nlc3MifQ.UYirA2PUlq_7cvKgIXWIfCct4-RG1vr70byAUaMZAj4", phone: "09045087864" },
  { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlZTA0NWMxMjM0Y2ZkYTZlZDc5Yjk5IiwiaWF0IjoxNzI3MDg4NzE0LCJleHAiOjE3MjcxNzUxMTQsInR5cGUiOiJhY2Nlc3MifQ.WgIGaO-qv8SdXjHXLacKHvdZfF8yAHCOzsH3hma245Q", phone: "09365087864" },
  { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlZTA0ZTEyYTgxMGEwYjQ1OGJjMjI1IiwiaWF0IjoxNzI3MDkwODIxLCJleHAiOjE3MjcxNzcyMjEsInR5cGUiOiJhY2Nlc3MifQ.bizmIi8leHAQI7IkuHbMTsb4aRF9PiPC25esCDjIubk", phone: "09191493905" },
  { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlZTA2NWEyYTgxMGEwYjQ1OGQ0NWU0IiwiaWF0IjoxNzI3MDkxMTMyLCJleHAiOjE3MjcxNzc1MzIsInR5cGUiOiJhY2Nlc3MifQ.EOf6Xs3NzLFr4an8jfpoZaaYIipR01r4KIzV8FROIpM", phone: "09303884022" },
  { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlZjQzNTc1MDIzMDkwNjNkODc4YzRhIiwiaWF0IjoxNzI3MDkxMzg2LCJleHAiOjE3MjcxNzc3ODYsInR5cGUiOiJhY2Nlc3MifQ.cvwvcxBhjINWq60gptGGRqIBjoUTeYfUAEATHWq-_5g", phone: "09025967865" },
  { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZlZjQ0MmU1MDIzMDkwNjNkODkwNzJmIiwiaWF0IjoxNzI3MDkxNTc0LCJleHAiOjE3MjcxNzc5NzQsInR5cGUiOiJhY2Nlc3MifQ.Uj17uaarYLo6j1buP5FtoeHzBkuv5XYrtFTQFfmuemo", phone: "09059549183" },
  // { token: "", phone: "" },
];

interface Mission {
  _id: string;
  reward: number;
  status: boolean;
}

async function fetchMissionsForTokens(): Promise<void> {
  let total = 0;
  
  for (const { token, phone } of tokenPhonePairs) {
    console.log(`Processing phone number: ${phone}`);

    try {
      const response = await fetch("https://api-mission.goatsbot.xyz/missions/user/", {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data: { [key: string]: Mission[] } = await response.json();
      const inactiveMissions: string[] = [];
      let totalCoins = 0;

      for (const [key, missions] of Object.entries(data)) {
        const filteredMissions = missions.filter((mission: Mission) => !mission.status);

        filteredMissions.forEach((mission: Mission) => {
          inactiveMissions.push(mission._id);
          totalCoins += mission.reward;
        });
      }
      total += totalCoins;

      console.log(`Inactive Mission IDs for phone ${phone}:`, inactiveMissions);
      console.log(`Total Coins for phone ${phone}:`, totalCoins);
      console.log(`Overall Total:`, total);

      for (const missionId of inactiveMissions) {
        const actionResponse = await fetch(`https://dev-api.goatsbot.xyz/missions/action/${missionId}`, {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (actionResponse.ok) {
          console.log(`Action executed for mission ID: ${missionId} (phone: ${phone})`);
        } else {
          console.log(`Failed to execute action for mission ID: ${missionId} (phone: ${phone})`);
        }
      }
    } catch (error) {
      console.log(`Error for phone ${phone}:`, error);
    }
  }
}

// فراخوانی تابع
fetchMissionsForTokens();
