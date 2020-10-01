const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;//디코봇 토큰

const Math = require("mathjs");

//크롤링 위한 부분~
/*
const acios = require("axios");
const log = console.log;
var charname = "캐릭터 이름"
*/

//~크롤링 위한 부분


client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "게스트"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ping') {
    return message.reply('pong');
  }

  //version
  //2 39정답 오류 패치 수정
//help
  if(message.content == '?help') {
    let commandList = [
      {name: '?무토', desc: '일일퀘스트:배고픈 무토 관련정보'},
      {name: '?시드', desc: '해저의 탑 the Seed 관련정보'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('메잘알 Bot')
      .setColor('#186de6')
      .setFooter(`제작자: 루프이론(리부트1)`)
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  } else if(message.content == '?정보') {
    let commandList = [
      {name: '?무토', desc: '일일퀘스트:배고픈 무토 관련정보'},
      {name: '?시드', desc: '해저의 탑 the Seed 관련정보'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('메잘알 Bot')
      .setColor('#186de6')
      .setFooter(`제작자: 루프이론(리부트1) v1.01`)
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }
//잡담-

if(message.content.startsWith("?메잘알봇")){
  if(message.content.endsWith("된다고 생각해?")){
    const result = Math.round(Math.random());
    msg.reply(`${result ? "네" : "아뇨"}`);

  }
  else if(message.content.endsWith("할래?") || message.content.endsWith("할거야?")){
    const result = Math.round(Math.random());
    msg.reply(`${result ? "저라면... 할거에요" : "아뇨... 하지 않을 거에요"}`);

  }
  else if(message.content.endsWith("지를까?") || message.content.endsWith("질러?")){
    const result = Math.round(Math.random());
    msg.reply(`${result ? "지금 지르면 뜰 거 같아요" : ""}`);

  }
  else if(message.content.endsWith("ㄱ?")){
    const result = Math.round(Math.random());
    msg.reply(`${result ? "ㄱㄱ" : "ㄴㄴ"}`);

  }
}

//배고픈 무토 -
  if(message.content == '?배고픈무토') {
    return message.reply("\n레시피 검색: ?[요리이름]\nex) ?엉엉순대 - 공백이 없어야합니다 (띄어쓰기 금지!)");}
  if(message.content == '?무토') {
    return message.reply("\n레시피 검색: ?[요리이름]\nex) ?엉엉순대 - 공백이 없어야합니다 (띄어쓰기 금지!)");}
    if(message.content == '?깔깔만두') {
        //let img = 'https://무토음식이미지주소';
        let embed = new Discord.RichEmbed()
          .setTitle('깔깔만두')
          .setDescription('비웃음? 감탄? 어쨌든 웃게되는 요리')
          .setColor('#3498DB')
          .addBlankField()
          .addField('재료', '새콤 껍질 x5\n쫀득 발바닥 x10')
          .addBlankField()
          .setFooter('일일퀘스트: 배고픈 무토')
    
        message.channel.send(embed)
      } 
      else if(message.content == '?낄낄볶음밥') {
        //let img = 'https://무토음식이미지주소';
        let embed = new Discord.RichEmbed()
          .setTitle('낄낄볶음밥')
          .setDescription('먹으면 행복함이 느껴지는 볶음밥')
          .setColor('#3498DB')
          .addBlankField()
          .addField('재료', '매콤 발굽 x5\n톡톡 갈기 x10')
          .addBlankField()
          .setFooter('일일퀘스트: 배고픈 무토')
    
        message.channel.send(embed)
      } 
      else if(message.content == '?앗볶음') {
        //let img = 'https://무토음식이미지주소';
        let embed = new Discord.RichEmbed()
          .setTitle('앗볶음')
          .setDescription('깨달음을 얻을 것 같은 볶음요리')
          .setColor('#3498DB')
          .addBlankField()
          .addField('재료', '느끼 껍질 x5\n폭신 발바닥 x10')
          .addBlankField()
          .setFooter('일일퀘스트: 배고픈 무토')
    
        message.channel.send(embed)
      } 
      else if(message.content == '?엉엉순대') {
        //let img = 'https://무토음식이미지주소';
        let embed = new Discord.RichEmbed()
          .setTitle('엉엉순대')
          .setDescription('삶의 희노애락, 모든 것이 담긴 요리')
          .setColor('#3498DB')
          .addBlankField()
          .addField('재료', '츄릅 열매 x1\n톡톡 갈기 x5\n말랑 등껍질 x5\n쫄깃 발톱 x10')
          .addBlankField()
          .setFooter('일일퀘스트: 배고픈 무토')
    
        message.channel.send(embed)
      } 
      else if(message.content == '?오잉피클') {
        //let img = 'https://무토음식이미지주소';
        let embed = new Discord.RichEmbed()
          .setTitle('오잉피클')
          .setDescription('재료가 궁금해지는 피클')
          .setColor('#3498DB')
          .addBlankField()
          .addField('재료', '톡톡 갈기 x5\n시큼 물갈퀴 x5\n끈적 깃털 x10')
          .addBlankField()
          .setFooter('일일퀘스트: 배고픈 무토')
    
        message.channel.send(embed)
      } 
      else if(message.content == '?으악샐러드') {
        //let img = 'https://무토음식이미지주소';
        let embed = new Discord.RichEmbed()
          .setTitle('으악샐러드')
          .setDescription('둘이 먹다 하나가 으악! 하며 쓰러져도 모를 요리')
          .setColor('#3498DB')
          .addBlankField()
          .addField('재료', '츄릅 열매 x1\n담백 갈기 x5\n바싹 등껍질 x5\n텁텁 발톱 x10')
          .addBlankField()
          .setFooter('일일퀘스트: 배고픈 무토')
    
        message.channel.send(embed)
      } 
      else if(message.content == '?이런면') {
        //let img = 'https://무토음식이미지주소';
        let embed = new Discord.RichEmbed()
          .setTitle('이런면')
          .setDescription('탱탱한 면발이 살아있는 면요리')
          .setColor('#3498DB')
          .addBlankField()
          .addField('재료', '달달 발굽 x5\n담백 갈기 x5\n단단 물갈퀴 x10')
          .addBlankField()
          .setFooter('일일퀘스트: 배고픈 무토')
    
        message.channel.send(embed)
      } 
      else if(message.content == '?저런찜') {
        //let img = 'https://무토음식이미지주소';
        let embed = new Discord.RichEmbed()
          .setTitle('저런찜')
          .setDescription('특이한 조합이지만 맛좋은 찜요리')
          .setColor('#3498DB')
          .addBlankField()
          .addField('재료', '느끼 껍질 x5\n폭신 발바닥 x5\n바싹 등껍질 x10')
          .addBlankField()
          .setFooter('일일퀘스트: 배고픈 무토')
    
        message.channel.send(embed)
      } 
      else if(message.content == '?크헉구이') {
        //let img = 'https://무토음식이미지주소';
        let embed = new Discord.RichEmbed()
          .setTitle('크헉구이')
          .setDescription('충격적인 비쥬얼의 구이요리')
          .setColor('#3498DB')
          .addBlankField()
          .addField('재료', '츄릅 열매 x1\n느끼 껍질 x5\n폭신 발바닥 x5\n미끈 깃털 x10')
          .addBlankField()
          .setFooter('일일퀘스트: 배고픈 무토')
    
        message.channel.send(embed)
      } 
      else if(message.content == '?큭큭죽') {
        //let img = 'https://무토음식이미지주소';
        let embed = new Discord.RichEmbed()
          .setTitle('큭큭죽')
          .setDescription('먹으면 야성을 살려주는 죽요리')
          .setColor('#3498DB')
          .addBlankField()
          .addField('재료', '시큼 물갈퀴 x5\n말랑 등껍질 x5\n쫄깃 발톱 x10')
          .addBlankField()
          .setFooter('일일퀘스트: 배고픈 무토')
    
        message.channel.send(embed)
      } 
      else if(message.content == '?하빵') {
        //let img = 'https://무토음식이미지주소';
        let embed = new Discord.RichEmbed()
          .setTitle('하빵')
          .setDescription('하하하하하 웃음만 나올 뿐인 빵요리')
          .setColor('#3498DB')
          .addBlankField()
          .addField('재료', '새콤 껍질 x5\n쫀득 발바닥 x5\n말랑 등껍질 x10')
          .addBlankField()
          .setFooter('일일퀘스트: 배고픈 무토')
    
        message.channel.send(embed)
      } 
      else if(message.content == '?허허말이') {
        //let img = 'https://무토음식이미지주소';
        let embed = new Discord.RichEmbed()
          .setTitle('허허말이')
          .setDescription('먹으면 허탈한 웃음이 나오는 요리')
          .setColor('#3498DB')
          .addBlankField()
          .addField('재료', '담백 갈기 x5\n단단 물갈퀴 x5\n미끈 깃털 x10')
          .addBlankField()
          .setFooter('일일퀘스트: 배고픈 무토')
    
        message.channel.send(embed)
      } 
      else if(message.content == '?헉튀김') {
        //let img = 'https://무토음식이미지주소';
        let embed = new Discord.RichEmbed()
          .setTitle('헉튀김')
          .setDescription('헉소리나게 바삭한 튀김요리')
          .setColor('#3498DB')
          .addBlankField()
          .addField('재료', '달달 발굽 x5\n담백 갈기 x10')
          .addBlankField()
          .setFooter('일일퀘스트: 배고픈 무토')
    
        message.channel.send(embed)
      } 
      else if(message.content == '?호호탕') {
        //let img = 'https://무토음식이미지주소';
        let embed = new Discord.RichEmbed()
          .setTitle('호호탕')
          .setDescription('뜨거워서 호호. 맛있어서 다시 호호')
          .setColor('#3498DB')
          .addBlankField()
          .addField('재료', '단단 물갈퀴 x5\n바싹 등껍질 x5\n텁텁 발톱 x10')
          .addBlankField()
          .setFooter('일일퀘스트: 배고픈 무토')
    
        message.channel.send(embed)
      } 
      else if(message.content == '?휴피자') {
        //let img = 'https://무토음식이미지주소';
        let embed = new Discord.RichEmbed()
          .setTitle('휴피자')
          .setDescription('가슴 속 깊은 곳에서 한숨이 올라온다')
          .setColor('#3498DB')
          .addBlankField()
          .addField('재료', '매콤 발굽 x5\n톡톡 갈기 x5\n시큼 물갈퀴 x10')
          .addBlankField()
          .setFooter('일일퀘스트: 배고픈 무토')
    
        message.channel.send(embed)
      } 
      else if(message.content == '?흑흑화채') {
        //let img = 'https://무토음식이미지주소';
        let embed = new Discord.RichEmbed()
          .setTitle('흑흑화채')
          .setDescription('맑은 눈물 한 방울이 흐르는 화채')
          .setColor('#3498DB')
          .addBlankField()
          .addField('재료', '츄릅 열매 x1\n새콤 껍질 x5\n쫀득 발바닥 x5\n끈적 깃털 x10')
          .addBlankField()
          .setFooter('일일퀘스트: 배고픈 무토')
    
        message.channel.send(embed)
      }
// -배고픈무토


// the Seed -
if(message.content == '?시드') {return message.reply("\nthe Seed 공략정보 검색: ?시드[nn]\nex) ?시드07 - 공백이 없어야합니다 (띄어쓰기 금지!)");} 
if(message.content == '?더시드') {return message.reply("\nthe Seed 공략정보 검색: ?시드[nn]\nex) ?시드07 - 공백이 없어야합니다 (띄어쓰기 금지!)");} 
if(message.content == '?seed') {return message.reply("\nthe Seed 공략정보 검색: ?시드[nn]\nex) ?시드07 - 공백이 없어야합니다 (띄어쓰기 금지!)");} 
if(message.content == '?theseed') {return message.reply("\nthe Seed 공략정보 검색: ?시드[nn]\nex) ?시드07 - 공백이 없어야합니다 (띄어쓰기 금지!)");} 



//?시드[nn] - n은 해당 층수
if(message.content == '?시드00') {return message.reply("\n로비\n\n기록요소\n입장 전 시드포인트\n\ntip\n없음");} 

if(message.content == '?시드01') {return message.reply("\n1층\n\n기록요소\n잡은 슬라임 수, 누적 데미지\n\ntip\n없음");} 
if(message.content == '?시드02') {return message.reply("\n2층\n\n기록요소\n총 주운 카드 수, 처음 or 마지막 주운 카드 내용, 레드/옐로우/그린/블루 결계를 속인 카드 내용\n\ntip\n없음");} 
if(message.content == '?시드03') {return message.reply("\n3층\n\n기록요소\n시그레타, 플렛타, 리플리에게 말을 건 횟수 (왠만해서 0)\n\ntip\n없음");} 
if(message.content == '?시드04') {return message.reply("\n4층\n\n기록요소\n균형 점수가 깎인 횟수\n\ntip\n없음");} 
if(message.content == '?시드05') {return message.reply("\n5층\n쉼터");} 

if(message.content == '?시드06') {return message.reply("\n6층\n\n기록요소\n킹슬라임 처치 횟수 (보통 3)\n\ntip\n없음");} 
if(message.content == '?시드07') {return message.reply("\n7층\n\n기록요소\n없음\n\ntip\n없음");} 
if(message.content == '?시드08') {return message.reply("\n8층\n\n기록요소\n잡은 화산벌레 수 (파티원 포함)\n\ntip\n없음");} 
if(message.content == '?시드09') {return message.reply("\n9층\n\n기록요소\n틀린 횟수, 발판 순서 (위에서부터)\n\ntip\n없음");} 
if(message.content == '?시드10') {return message.reply("\n10층\n보스 처치");} 


if(message.content == '?시드11') {return message.reply("\n11층\n\n기록요소\n본인이 처치한 검은 플라워 골렘 수 (파티원에게 시켰다면 0)\n\ntip\n없음");} 
if(message.content == '?시드12') {return message.reply("\n12층\n\n기록요소\n없음\n\ntip\n없음");} 
if(message.content == '?시드13') {return message.reply("\n13층\n\n기록요소\n처치한 그린 플라워카우, 흰색 가시곰 수 (기본적으로 15+a)\n\ntip\n없음");} 
if(message.content == '?시드14') {return message.reply("\n14층\n\n기록요소\n없음\n\ntip\n없음");} 
if(message.content == '?시드15') {return message.reply("\n15층\n쉼터");} 

if(message.content == '?시드16') {return message.reply("\n16층\n\n기록요소\n없음\n\ntip\n없음");} 
if(message.content == '?시드17') {return message.reply("\n17층\n\n기록요소\n없음\n\ntip\n없음");} 
if(message.content == '?시드18') {return message.reply("\n18층\n\n기록요소\n없음\n\ntip\n없음");} 
if(message.content == '?시드19') {return message.reply("\n19층\n\n기록요소\n없음\n\ntip\n없음");} 
if(message.content == '?시드20') {return message.reply("\n20층\n보스 처치");} 


if(message.content == '?시드21') {return message.reply("\n21층\n\n기록요소\n엘리쟈 제외한 사냥 마릿수\n\ntip\n없음");} 
if(message.content == '?시드22') {return message.reply("\n22층\n\n기록요소\n떨어진 횟수\n\ntip\n없음");} 
if(message.content == '?시드23') {return message.reply("\n23층\n\n기록요소\n떨어진 횟수, 타인이 길을 보고 있었는지 여부(O, X)\n\ntip\n아앞 위위위위 앞위 아위 아아아\n앞위 아 위위위 아아\n아아 위 아 위위위위 아 위위");} 
if(message.content == '?시드24') {return message.reply("\n24층\n\n기록요소\n각 배경음악 이름\n\ntip\n없음");} 
if(message.content == '?시드25') {return message.reply("\n25층\n쉼터");} 

if(message.content == '?시드26') {return message.reply("\n26층\n\n기록요소\n총 주운 액체 수, 슬라임 소환 시도 횟수 (성공, 실패 여부 관계없음)\n\ntip\n없음");} 
if(message.content == '?시드27') {return message.reply("\n27층\n\n기록요소\n없음\n\ntip\n없음");} 
if(message.content == '?시드28') {return message.reply("\n28층\n\n기록요소\n특정 위치에 나온 횟수\n\ntip\n없음");} 
if(message.content == '?시드29') {return message.reply("\n29층\n\n기록요소\n클리어에 필요했던 모래 결정 개수\n\ntip\n없음");} 
if(message.content == '?시드30') {return message.reply("\n30층\n보스 처치");} 


if(message.content == '?시드31') {return message.reply("\n31층\n\n기록요소\n페어리 소환 횟수\n\ntip\n없음");} 
if(message.content == '?시드32') {return message.reply("\n32층\n\n기록요소\n없음\n\ntip\n소환수 사용");} 
if(message.content == '?시드33') {return message.reply("\n33층\n\n기록요소\n각 열쇠 남은 개수\n\ntip\n포탈 옆에 뿌려두고 알리샤에게 열쇠 받기\n,기록시드:열쇠 마지막에 다 버리고 내려가기");} 
if(message.content == '?시드34') {return message.reply("\n34층\n\n기록요소\n포탈 이용 횟수\n\ntip\n적의 공격은 슈퍼넉백, 윗점 + 로프커넥터 사용 가능");} 
if(message.content == '?시드35') {return message.reply("\n35층\n쉼터\n\n기록요소\n헤이지스톤 타이머의 남은 시간(초단위까지 정확히)");} 

if(message.content == '?시드36') {return message.reply("\n36층\n\n기록요소\n전체 비밀번호 (주황버섯: 1, 달팽이: 2, 리본돼지: 3, 슬라임: 4)\n\ntip\n천천히 입력");} 
if(message.content == '?시드37') {return message.reply("\n37층\n\n기록요소\n없음\n\ntip\n없음");} 
if(message.content == '?시드38') {return message.reply("\n38층\n\n기록요소\n어둠의 기운이 바뀐 횟수\n\ntip\n없음");} 
if(message.content == '?시드39') {return message.reply("\n39층\n\n기록요소\n없음\n\ntip\n명령어 '?39[1번 선택지]' 를 입력하여 문제의 정답을 알 수 있다. \nex) ?39단풍나무아래서 - 공백이 없어야합니다 (띄어쓰기 금지!)");} 
if(message.content == '?시드40') {return message.reply("\n40층\n보스 처치");} 


if(message.content == '?시드41') {return message.reply("\n41층\n\n기록요소\n없음\n\ntip\n없음");} 
if(message.content == '?시드42') {return message.reply("\n42층\n\n기록요소\n없음\n\ntip\n파티시드 추천");} 
if(message.content == '?시드43') {return message.reply("\n43층\n\ntip\n지금까지 기록한 정보들을 활용하기");} 
if(message.content == '?시드44') {return message.reply("\n44층\n\ntip\n없음");} 
if(message.content == '?시드45') {return message.reply("\n45층\n쉼터");} 

if(message.content == '?시드46') {return message.reply("\n46층\n\ntip\n없음");} 
if(message.content == '?시드47') {return message.reply("\n47층\n\ntip\n문 체력 630억, 일반몬스터 = 보스공격력 적용 안되는 노멀 시그너스");} 
if(message.content == '?시드48') {return message.reply("\n48층\n\ntip\n45층에서 종료 후 테스트서버에서 연습가능");} 
if(message.content == '?시드49') {return message.reply("\n49층\n\ntip\n없음");} 
if(message.content == '?시드50') {return message.reply("\n50층\n보스 처치");} 


// the Seed 39층 문제지 ~
// ?39[1번 선택지]
if(message.content == '?3910주년이벤트홀') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?393월토끼의자') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39개구리') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39검은집') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39검은플라워골렘') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39게릴라스펙터') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39고대붉은거북') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39고대주황거북') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39고대파랑거북') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39고스트') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39골드리치') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39구영감') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39그린골드벨트') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39그린플라워카우') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39그윈') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39근력단련') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39기옹') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39나무욕조') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39나무꾼의집') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39나팔꽃화분') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39내게돌아와의자') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39너클숙련') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39노공') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39노블레스의자') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39노비스캐논') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39놀이공원바이킹') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39니벨룽겐전함') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39다니카') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39다크나이트') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39단풍나무아래서') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39더블샷위쳐') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39데몬슬레이어') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39데몬헌터') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39도공') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39도베르만') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39도약') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39동굴집') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39듀나스') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39드래곤헤르츠') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39디테') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39디펜스의달인') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39라니아') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39라엘') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39라일라') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39락스피릿') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39러브리스엑서큐서너스') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39레드바이퍼') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39레인지로버') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39로도스') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39루이스') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39리나') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39리드') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39리스항구') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39릴렉스체어') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39마법사의가루약') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39마이크') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39마인드스킨') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39마크맨쉼') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39마파') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39메이플1500일깃발') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39메이플우산') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39무닌') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39무라트') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39무루파') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39뮤네') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39미스포츈프로텍션') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39미하일') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39뱀부체어') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39버섯버섯광산') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39벅카스D') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39베르가모트') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39베티') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39벨더') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39벼루') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39보티첼리') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39불량학생') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39불사조의꼬리깃털') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39붐붐크래쉬') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39브로커정') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39블루플라워카우') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39비숍') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39비어완') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39빅브라더') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39빨간벽돌집') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39사라세니아') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39사랑의의자') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39사랑이담긴초콜릿') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39사바트라마') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39살살녹는치즈') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39생츄어리') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39섀도우마스터') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39서전아이') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39선구자의모울') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39소울아카이브') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39소울마스터') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39소피아') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39소혼장막') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39속도향상의알약') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39솔리드바디') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39슈가의요리모자') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39슈리츠') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39스로잉웨폰') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39스켈독') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39스톤골렘') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39스톤마스크') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39스페셜D포션') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39스핀커터') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39슬래시블러스트') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39슬러그샷') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39슬리핑포레스트') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39실신한기도') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39써니텐엘릭서') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39아구몽') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39아우프헤벤') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39아이린') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39아이언바디') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39아이언바디') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39아지트') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39아츠') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39아쿠아로드소라집') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39아크(불독)') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39아크(썬콜)') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39아크메이지(불독)') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39알렉스') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39약화') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39양날도끼') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39양파라고라') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39어드밴스드롤링커브') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39어스브레이크') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39에레브') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39에스텔') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39에피네아') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39엔젤의발걸음') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39엘리니브') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39엘리멘탈차지') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39여섯갈래길') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39여우령') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39여우비의자') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39오르비스') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39오심마') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39옥토퍼스') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39와일드보어') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39와일드카고') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39와일드헌터') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39요정로웬') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39요정마르') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39요정아르웬') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39요정윙') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39워리어리프') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39웨폰마스터리') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39웨폰부스터') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39유타') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39이토스') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39일스') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39임페리얼이그니스') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39자이드') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39자일즈의망토') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39자쿰의눈물') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39장로스탄') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39잭') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39쟈스민씨앗') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39점핑크래시') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39점핑파워봄') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39제령') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39제이드해츨링') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39제피') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39좀비머쉬맘') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39주니어레이스') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39주주우유농장') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39주황버섯집') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39쥬니퍼베리꽃') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39지미') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39찰즈') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39천연빙하집') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39천지') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39체프') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39초가집') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39초록버섯집') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39카모마일꽃') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39카오스핑크빈모자') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39카오스호크헤드') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39칼리쉬') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39캘리코') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39커닝시티') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39컴뱃리커버리') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39케리') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39케이그') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39콜래트럴플래시') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39크리슈라마') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39크세르크세스') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39클라리세이지') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39클랑') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39탈리온') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39탕윤') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39태극2타') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39탱글탱글포도농장') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39템페스트견장') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39토리') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39토푸') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39통백권3타') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39통증완화제') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39특제파이어잭') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39티트리씨앗') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39파란버섯') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39파란포션') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39파력권2타') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39파이널어택') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39파이트스플래쉬') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39파프니르러스터캐논') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39판테온신전') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39팔극4타') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39팔라딘') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39페리온') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39페이슨') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39페일') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39페츌리꽃') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39포춘어택') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39푸슬라') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39프레드릭') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39플라워골렘') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39플래시어썰터') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39피지컬트레이닝') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39핑크물개쿠션') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39하얀포션') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39하이위즈덤') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39하프이어링') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39학') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39한옥집') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39행복화이트캐논') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39허브오일병') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39헤네시스궁수길드') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39헤네시스집') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39헤이즈') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39헬크래쉬') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 
if(message.content == '?39헬레나') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39호프만') {return message.reply("\n해당 문제의 정답은 1번입니다.");} 
if(message.content == '?39휴머노이드C') {return message.reply("\n해당 문제의 정답은 2번입니다.");} 
if(message.content == '?39흰가시곰') {return message.reply("\n해당 문제의 정답은 4번입니다.");} 
if(message.content == '?39히솝꽃') {return message.reply("\n해당 문제의 정답은 3번입니다.");} 

// ?39[1번 선택지] - 예외
if(message.content == '?39달팽이') {return message.reply("\n2번 선택지가 '페어리' 일경우... 정답 : 1\n2번 선택지가 '다크 케투스' 일경우... 정답 : 2");} 
if(message.content == '?39배틀메이지') {return message.reply("\n2번 선택지가 '다크나이트' 일경우... 정답 : 3\n2번 선택지가 '플레임 위저드' 일경우... 정답 : 2");} 
if(message.content == '?39셀렌') {return message.reply("\n2번 선택지가 '재클린' 일경우... 정답 : 2\n2번 선택지가 '올리비아' 일경우... 정답 : 1");} 
if(message.content == '?39슈미') {return message.reply("\n2번 선택지가 '알딘' 일경우... 정답 : 2\n2번 선택지가 '아벨' 일경우... 정답 : 3");} 
if(message.content == '?39엔젤릭버스터') {return message.reply("\n2번 선택지가 '팔라딘' 일경우... 정답 : 1\n2번 선택지가 '나이트워커' 일경우... 정답 : 2");} 
if(message.content == '?39카이저') {return message.reply("\n2번 선택지가 '소울마스터' 일경우... 정답 : 1\n2번 선택지가 '엔젤릭버스터' 일경우... 정답 : 4");} 
if(message.content == '?39큐트') {return message.reply("\n2번 선택지가 '게렉터' 일경우... 정답 : 2\n2번 선택지가 '리사' 일경우... 정답 : 2\n2번 선택지가 '네벨' 일경우... 정답 : 3");} 
if(message.content == '?39펜릴') {return message.reply("\n2번 선택지가 '세빌' 일경우... 정답 : 2\n2번 선택지가 '핑크테니' 일경우... 정답 : 1");} 
if(message.content == '?39히어로') {return message.reply("\n2번 선택지가 '나이트로드' 일경우... 정답 : 4\n2번 선택지가 '플레임위자드' 일경우... 정답 : 3");} 

//v2 patch
if(message.content == '?39반반') {return message.reply("\n2번 선택지가 '해군함장' 일경우... 정답 : 4\n2번 선택지가 '샤모스' 일경우... 정답 : 2");} 

// ~ the Seed 39층 문제지




//maple.gg 크롤링 ~
// ?지지[캐릭터이름]
// ?무릉[캐릭터이름]
// ?시드[캐릭터이름]
// ?업적[캐릭터이름]
// ?
/*
if(message.content.startsWith("?지지".Charname)){
  let img = GGSearchCharImg(Charname);//캐릭터이미지
  let embed = new Discord.RichEmbed()
    .setTitle('')//캐릭터명
    .setDescription('')//마지막 정보 갱신일
    .setColor('#3EB489')
    .addBlankField()
    .addField('무릉도장 최고기록', 'charname')// [층] [분,초]
    .addField('더 시드 최고기록', '')// [층] [분,초]
    .addField('유니온', '')//[등급] [레벨합]
    .addField('업적', '')//[등급] [포인트]
    .addField('재료', '')
    .addBlankField()
    .setFooter('Maple.GG 제공')

  message.channel.send(embed)
*/



}
// ~ maple.gg 크롤링







//~봇 내용
});
//함수 시작~

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


/*
//ggSearch
function GGSearchCharImg(length){
  

}
function GGSearchCharName(){


}
function GGSearchLastUpd(){


}
function GGsearchMulungFloors(){


}
function GGsearchMulungTime(){


}
function GGSearchTofOz(){


}
function GGSearchTofOzTime(){


}
function GGSearchUnion(){


}
function GGSearchUnionLevel(){


}
function GGsearchAch(){


}
function GGsearchAchPoint(){


}
*/



client.login(token);