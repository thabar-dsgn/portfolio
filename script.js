/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const dict = {
  pt: {
    nav_about: "Sobre",
    nav_projects: "Projetos",
    nav_contact: "Contato",
    hero_tagline: "Especialista em criar produtos digitais com visão estratégica e foco na experiência.",
    hero_scroll: "role para ver o trabalho",
    hero_pill: "Staff Product Designer · Hotmart",
    hero_cycle_prefix: "Produtos pra",
    hero_cycle_words: ["fintechs", "saúde", "educação", "IA"],
    hero_cta: "Ver projetos",
    logos_label: "Já passei por",
    projects_title: "Projetos",
    projects_sub: "Uma seleção de trabalhos end-to-end em fintech, saúde e educação.",
    cursor_label: "Ver projeto",
    locked_label: "restrito",
    locked_hint: "acesso sob senha",
    about_kicker: "Sobre",
    about_bio: "Sou Thaís Santos, Staff Product Designer com mais de 13 anos desenhando produtos digitais end-to-end para fintechs, saúde e educação. Hoje lidero o design do Tutor, o assistente de IA da Hotmart Club, usando Claude e Figma Make no dia a dia. Também sou mentora na ADPList.",
    about_stat1_n: "13+",
    about_stat1_l: "anos de experiência",
    about_stat2_n: "06",
    about_stat2_l: "empresas, do banco ao infoproduto",
    about_stat3_n: "01",
    about_stat3_l: "IA que ajudo a desenhar todo dia",
    contact_kicker: "Contato",
    contact_title: "Vamos conversar?",
    contact_sub: "Aberta a novos projetos, mentorias e boas conversas sobre produto.",
    contact_email_l: "e-mail",
    contact_phone_l: "whatsapp",
    contact_linkedin_l: "linkedin",
    footer_rights: "Feito à mão, linha por linha.",
    gate_title: "Este case é protegido",
    gate_subtitle: "Peça a senha diretamente pra Thaís para ver o conteúdo completo.",
    gate_placeholder: "Senha",
    gate_submit: "Entrar",
    gate_error: "Senha incorreta — tente de novo.",
    back_label: "Voltar",
    meta_year: "Ano",
    meta_industry: "Indústria",
    meta_service: "Serviço",
    meta_solution: "Solução",
    more_projects: "Mais projetos",
    project_cta_title: "Vamos conversar?",
    project_cta_sub: "Aberta a novos projetos, mentorias e boas conversas sobre produto.",
  },
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_tagline: "A product designer building digital products with strategic vision and a focus on experience.",
    hero_scroll: "scroll to see the work",
    hero_pill: "Staff Product Designer · Hotmart",
    hero_cycle_prefix: "Products for",
    hero_cycle_words: ["fintech", "health", "education", "AI"],
    hero_cta: "See projects",
    logos_label: "Previously at",
    projects_title: "Projects",
    projects_sub: "A selection of end-to-end work across fintech, health and education.",
    cursor_label: "View project",
    locked_label: "restricted",
    locked_hint: "password protected",
    about_kicker: "About",
    about_bio: "I'm Thaís Santos, a Staff Product Designer with 13+ years designing end-to-end digital products for fintechs, health and education. I currently lead design for Tutor, Hotmart Club's AI assistant, using Claude and Figma Make daily. I also mentor on ADPList.",
    about_stat1_n: "13+",
    about_stat1_l: "years of experience",
    about_stat2_n: "06",
    about_stat2_l: "companies, from banks to info-products",
    about_stat3_n: "01",
    about_stat3_l: "AI I help design every day",
    contact_kicker: "Contact",
    contact_title: "Let's talk?",
    contact_sub: "Open to new projects, mentoring and good conversations about product.",
    contact_email_l: "email",
    contact_phone_l: "whatsapp",
    contact_linkedin_l: "linkedin",
    footer_rights: "Built by hand, line by line.",
    gate_title: "This case is password-protected",
    gate_subtitle: "Ask Thaís directly for the password to see the full content.",
    gate_placeholder: "Password",
    gate_submit: "Enter",
    gate_error: "Wrong password — try again.",
    back_label: "Back",
    meta_year: "Year",
    meta_industry: "Industry",
    meta_service: "Service",
    meta_solution: "Solution",
    more_projects: "More projects",
    project_cta_title: "Let's talk?",
    project_cta_sub: "Open to new projects, mentoring and good conversations about product.",
  },
};

const TUTOR_COVER_IMAGE = "img-01.jpg";

const IMG1 = "img-02.jpg";
const IMG2 = "img-03.webp";
const IMG3 = "img-04.webp";
const IMG4 = "img-05.jpg";
const IMG5 = "img-06.jpg";
const IMG6 = "img-07.jpg";
const IMG7 = "img-08.jpg";
const IMG8 = "img-09.jpg";
const CASE_IMAGES = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8];
const TUTOR_THUMB = "img-10.jpg";
const HOMEPAGE_COVER_IMAGE = "img-11.jpg";
const HOMEPAGE_THUMB = "img-12.jpg";
const HOMEPAGE_HEATMAP_IMG = "img-13.png";
CASE_IMAGES.push(HOMEPAGE_HEATMAP_IMG);
const HOMEPAGE_DEMO_VIDEO = "homepage-demo.mp4";
const PARTNER_JOURNEY_IMG = "img-14.jpg";
CASE_IMAGES.push(PARTNER_JOURNEY_IMG);
const PORTAL_DEMO_VIDEO = "portal-demo.mp4";
const SCREENS_IMG = "img-15.webp";
const NAVSAUDE_COVER_IMAGE = "img-16.jpg";
const NAVSAUDE_THUMB = "img-17.jpg";
const NAVSAUDE_VACCOV_IMG = "img-18.jpg";
CASE_IMAGES.push(NAVSAUDE_VACCOV_IMG);
const NAVSAUDE_BENCHMATRIX_IMG = "img-19.jpg";
CASE_IMAGES.push(NAVSAUDE_BENCHMATRIX_IMG);
const NAVSAUDE_MVP_SCREENS_IMG = "img-20.webp";
CASE_IMAGES.push(NAVSAUDE_MVP_SCREENS_IMG);
CASE_IMAGES.push(SCREENS_IMG);
const PARTNER2_COVER_IMAGE = "img-21.jpg";
const PARTNER2_THUMB = "img-22.jpg";
const PARTNER_DASHBOARD_IMG = "img-23.webp";
CASE_IMAGES.push(PARTNER_DASHBOARD_IMG);
const UI_KIT_IMG = "img-24.webp";
CASE_IMAGES.push(UI_KIT_IMG);
const ABOUT_GALLERY_IMAGES = ["img-25.jpg", "img-26.jpg", "img-27.jpg", "img-28.jpg", "img-29.jpg", "img-30.jpg", "img-31.jpg", "img-32.jpg", "img-33.jpg"];
const projects = [
  { id: "tutor", file: "tutor.app", company: "Hotmart", year: "2026", isProtected: false, gated: true, coverImage: TUTOR_COVER_IMAGE, thumb: TUTOR_THUMB,
    title: { pt: "Tutor IA", en: "Tutor AI" },
    desc: { pt: "Design do assistente de IA do Hotmart Club, do zero ao lançamento.", en: "Designing Hotmart Club's AI assistant, from zero to launch." },
    cs: {
      eyebrow: { pt: "Case de Product Design · Hotmart Club · Q2 2026", en: "Product Design Case · Hotmart Club · Q2 2026" },
      title: { pt: "Tutor IA", en: "Tutor AI" },
      subtitle: { pt: "De chatbot de dúvidas a concierge do aluno.", en: "From a Q&A chatbot to the student's concierge." },
      meta: [
        { l: { pt: "Papel", en: "Role" }, v: { pt: "Staff Product Designer", en: "Staff Product Designer" } },
        { l: { pt: "Duração", en: "Timeline" }, v: { pt: "Janeiro → Junho 2026 (Q2)", en: "January → June 2026 (Q2)" } },
        { l: { pt: "Escopo", en: "Scope" }, v: { pt: "Experiência do aluno (buyer) e experiência de configuração do creator", en: "Student (buyer) experience and creator configuration experience" } },
        { l: { pt: "Plataforma", en: "Platform" }, v: { pt: "Web — experiência de curso do Hotmart Club", en: "Web — Hotmart Club's course experience" } },
      ],
      sections: [
        {
          num: "01",
          title: { pt: "O que é o Tutor, e onde eu entro", en: "What the Tutor is, and where I came in" },
          body: {
            pt: [
              "O Tutor é o guia com IA do Hotmart Club — acompanha o aluno 24h por dia e adapta as trilhas de conhecimento ao objetivo de cada pessoa, dentro da experiência de curso.",
              "Entrei no time no início do trimestre (Q2 2026) para diagnosticar o motivo real por trás de um número de engajamento baixo. Esse diagnóstico acabou guiando o resto do trimestre, com uma virada de tese pelo caminho.",
              "Meu escopo cobriu os dois lados do mesmo produto: a experiência do aluno durante o uso e a experiência de configuração do creator. Conduzi a pesquisa (sessões moderated e unmoderated via Maze), defini a tese de design, desenhei as intervenções e acompanhei os resultados junto a dados e produto.",
            ],
            en: [
              "The Tutor is Hotmart Club's AI guide — it follows the student around the clock and adapts learning tracks to each person's goal, inside the course experience.",
              "I joined the team at the start of the quarter (Q2 2026) to diagnose the real reason behind a low engagement number. That diagnosis ended up guiding the rest of the quarter, with a shift in thesis along the way.",
              "My scope covered both sides of the same product: the student's experience while using it, and the creator's setup experience. I ran the research (moderated and unmoderated sessions via Maze), defined the design thesis, designed the interventions, and tracked results together with data and product.",
            ],
          },
          quote: {
            pt: "\"A primeira leitura seria 'a feature não engaja'. A pesquisa mostrou outra coisa: o baixo engajamento era sintoma de desorientação na jornada do aluno — não de falta de valor do produto.\"",
            en: "\"The first read would be 'the feature isn't engaging.' Research showed something else: low engagement was a symptom of disorientation in the student journey — not a lack of product value.\"",
          },
          cite: { pt: "— Diagnóstico da pesquisa, Q2 2026", en: "— Research diagnosis, Q2 2026" },
        },
        { isImage: true, src: IMG1, caption: { pt: "Fluxo do tutor IA como era: Ferramenta reativa que responde dúvidas sobre um curso específico.", en: "How the Tutor AI flow used to be: a reactive tool that answers questions about a specific course." } },
        {
          num: "02",
          title: { pt: "O experimento que redefiniu a agenda", en: "The experiment that redefined the agenda" },
          body: {
            pt: ["Em março de 2026, testamos se uma jornada guiada — onboarding, anamnese e recomendação — aumentaria a recorrência e o engajamento com o Tutor. ~517 mil usuários por grupo, 5 dias, análise ITT."],
            en: ["In March 2026, we tested whether a guided journey — onboarding, intake and recommendation — would increase recurrence and engagement with the Tutor. ~517k users per group, 5 days, ITT analysis."],
          },
          findings: [
            { title: { pt: "A jornada ativa, mas não retém", en: "The journey activates, but doesn't retain" }, desc: { pt: "Engajamento orgânico subiu 4,6 p.p. entre novos usuários, mas a recorrência em D1/D3/D7 ficou perto de ~0 p.p.", en: "Organic engagement rose 4.6 p.p. among new users, but D1/D3/D7 recurrence stayed near ~0 p.p." }, verdict: { pt: "Ativação ≠ retenção", en: "Activation ≠ retention" } },
            { title: { pt: "O gargalo está antes da experiência", en: "The bottleneck sits before the experience" }, desc: { pt: "87,3% dos alunos aptos nunca clicaram na jornada — a maior perda acontece antes de qualquer tela ser vista.", en: "87.3% of eligible students never clicked into the journey — the biggest loss happens before any screen is seen." }, verdict: { pt: "87,3% nunca clicam", en: "87.3% never click" } },
            { title: { pt: "O sinal mais forte foi o efeito creator", en: "The strongest signal was the creator effect" }, desc: { pt: "Quando o creator divulgava o Tutor, o engajamento chegava a 4x — o problema é distribuição, não qualidade.", en: "When the creator promoted the Tutor, engagement reached 4x — the problem is distribution, not quality." }, verdict: { pt: "4x com o creator", en: "4x with the creator" } },
          ],
          signal: { pt: "Essas três leituras redirecionaram o foco: de otimizar a experiência dentro do Tutor para resolver o convite até ela — e confirmaram que o creator é o canal mais forte que temos.", en: "These three readings redirected the focus: from optimizing the experience inside the Tutor to solving the invitation to it — and confirmed the creator is our strongest channel." },
        },
        { isImage: true, src: IMG2, caption: { pt: "Tutor IA após a entrega de Onboarding e Anamnese", en: "Tutor AI after the Onboarding and Intake delivery" } },
        {
          num: "03",
          title: { pt: "Uma decisão difícil: aceitar cair para crescer", en: "A hard call: accepting a drop to grow" },
          body: {
            pt: ["Entre janeiro e abril, apostamos em fricção intencional no onboarding e na anamnese do Tutor. Isso derrubou a taxa de abertura de propósito — a pergunta era se o time toparia ver esse número descer antes de ver o resultado real."],
            en: ["Between January and April, we bet on intentional friction in onboarding and intake. That intentionally tanked the open rate — the question was whether the team would accept watching that number fall before seeing the real result."],
          },
          stats: [
            { v: "+118%", l: { pt: "de qualificação no engajamento (conversão sobre abertura)", en: "in engagement qualification (conversion over open rate)" } },
            { v: "5,0 → 5,2", l: { pt: "perguntas por aluno — maior profundidade de uso", en: "questions per student — deeper usage" } },
            { v: "69,5%", l: { pt: "dos usuários voltam a usar o Tutor após o primeiro contato", en: "of users come back to the Tutor after first contact" } },
            { v: "28,2 → 15,6%", l: { pt: "taxa de abertura — queda intencional de curiosos", en: "open rate — an intentional drop in the curious" } },
          ],
        },
        {
          num: "04",
          title: { pt: "Três intervenções, uma lógica só", en: "Three interventions, one logic" },
          body: {
            pt: ["Do lado do aluno, cada intervenção resolve uma das três causas diagnosticadas. Do lado do creator, a entrega dá controle pedagógico e visibilidade — pré-requisito estrutural para o resultado do aluno acontecer."],
            en: ["On the student side, each intervention solves one of the three diagnosed causes. On the creator side, the delivery gives pedagogical control and visibility — a structural prerequisite for any result on the student side."],
          },
          items: [
            { title: { pt: "Tour guiado", en: "Guided tour" }, desc: { pt: "Substitui a tela de marketing estática por tooltips contextuais direto sobre o player.", en: "Replaces the static marketing screen with contextual tooltips right on the player." } },
            { title: { pt: "FAB (botão flutuante)", en: "FAB (Floating Action Button)" }, desc: { pt: "Substitui o item estático da navbar por um elemento flutuante, mais difícil de ignorar.", en: "Replaces the static navbar item with a floating element, harder to ignore." } },
            { title: { pt: "Nudges contextuais", en: "Contextual nudges" }, desc: { pt: "O Tutor se expande sozinho conforme o estado do aluno — ao pausar o vídeo, por exemplo.", en: "The Tutor expands on its own based on the student's state — e.g. when they pause the video." } },
            { title: { pt: "Batizar o Tutor", en: "Naming the Tutor" }, desc: { pt: "O creator batiza a IA e define o seu papel dentro do curso.", en: "The creator names the AI and defines its role within the course." } },
            { title: { pt: "Controle sobre o material", en: "Full control over the material" }, desc: { pt: "Regras que impedem o Tutor de antecipar conteúdo de módulos futuros.", en: "Rules that stop the Tutor from revealing content from future modules." } },
            { title: { pt: "Dashboards de comportamento", en: "Behavior dashboards" }, desc: { pt: "Mostram ao creator onde os alunos travam, para agir sobre isso.", en: "Show creators exactly where students get stuck, so they can act on it." } },
          ],
          case: { pt: "Case real: a creator Dúnnia batizou sua IA de \"Tutor Lip\" e alcançou 54% de engajamento — mais de 6x a meta oficial do trimestre.", en: "Real case: creator Dúnnia named her AI \"Tutor Lip\" and hit 54% engagement — more than 6x the quarter's official target." },
        },
        { isGallery: true, images: [IMG3, IMG4, IMG5], caption: { pt: "Tutor proativo: presente em todo o Hotmart Club (não somente dentro de um curso), guiando a experiência de acordo com o momento do aluno.", en: "Proactive Tutor: present across the entire Hotmart Club (not just inside a course), guiding the experience according to the student's moment." } },
        {
          num: "05",
          title: { pt: "Jan → Abr 2026: menos volume, mais valor", en: "Jan → Apr 2026: less volume, more value" },
          body: {
            pt: ["O ganho não foi só de número — foi de qualidade de sinal. Menos volume raso, mais uso que de fato ajuda o aluno."],
            en: ["The gain wasn't just in the numbers — it was in signal quality. Less shallow volume, more use that genuinely helps students."],
          },
          table: {
            head: { pt: ["Métrica", "Jan 2026", "Abr 2026"], en: ["Metric", "Jan 2026", "Apr 2026"] },
            rows: [
              [{ pt: "Taxa de abertura", en: "Open rate" }, "28,2%", "15,6%"],
              [{ pt: "Conversão (engaj. / abertura)", en: "Conversion (engagement / open)" }, "12,7%", "27,7%"],
              [{ pt: "Perguntas por aluno", en: "Questions per student" }, "5,0", "5,2"],
              [{ pt: "Usuários recorrentes (LTV)", en: "Returning users (LTV)" }, "—", "69,5%"],
            ],
          },
          learnings: [
            { title: { pt: "Volume e qualidade contam histórias diferentes", en: "Volume and quality tell different stories" }, desc: { pt: "É preciso escolher qual métrica guia a decisão antes de agir.", en: "You need to choose which metric guides the decision before acting." } },
            { title: { pt: "A voz de quem convida pesa mais que a interface", en: "The voice of whoever invites matters more than the interface" }, desc: { pt: "Endosso do creator não é bônus, é pré-requisito estrutural.", en: "Creator endorsement isn't a bonus, it's a structural prerequisite." } },
            { title: { pt: "O problema estava no convite, não na experiência", en: "The problem was the invitation, not the experience" }, desc: { pt: "87,3% dos alunos aptos nunca clicaram na jornada guiada.", en: "87.3% of eligible students never clicked into the guided journey." } },
            { title: { pt: "Ativação não é retenção", en: "Activation isn't retention" }, desc: { pt: "Dá pra fazer alguém experimentar o Tutor e mesmo assim não voltar.", en: "You can get someone to try the Tutor and still not have them come back." } },
            { title: { pt: "Não bastava o aluno sentir valor — o creator precisava ver valor", en: "It wasn't enough for the student to feel value — the creator needed to see it" }, desc: { pt: "O endosso não se compra com resultado: o creator só recomenda o que confia. Por isso redesenhamos toda a experiência de configuração do Tutor, dando ao creator controle total sobre a ferramenta — da identidade da IA às regras do que ela pode e não pode dizer.", en: "Endorsement isn't bought with results: creators only recommend what they trust. So we redesigned the entire Tutor setup experience, giving creators full control over the tool — from the AI's identity to the rules of what it can and can't say." } },
          ],
          closing: {
            headline: { pt: "O produto funciona. Ninguém entra.", en: "The product works. Nobody comes in." },
            quote: { pt: "\"O Tutor não é um simples campo de busca. Ele é o fim da solidão do aluno.\"", en: "\"The Tutor isn't just a search box. It's the end of the student's loneliness.\"" },
            text: { pt: "Nosso design transformou o consumo passivo de vídeo em uma jornada de aprendizagem guiada e ativa — para quem aprende, e para quem ensina.", en: "Our design turned passive video consumption into a guided, active learning journey — for those who learn, and those who teach." },
          },
        },
        { isSlider: true, images: [IMG6, IMG7, IMG8] },
      ],
    },
  },
  { id: "portal-parceiro", file: "portal-parceiro.app", company: "Creditas", year: "2024", isProtected: false, coverImage: HOMEPAGE_COVER_IMAGE, thumb: HOMEPAGE_THUMB,
    title: { pt: "Redesign da Homepage", en: "Homepage Redesign" },
    desc: { pt: "Redesenho da homepage da Creditas para equilibrar conversão e construção de marca.", en: "Redesigning the Creditas homepage to balance conversion and brand-building." },
    industry: { pt: "Financeiro · Crédito", en: "Financial · Credit" },
    service: { pt: "Design de produto", en: "Product design" },
    solution: { pt: "Redesign da Homepage", en: "Homepage Redesign" },
    cs: {
      eyebrow: { pt: "Case de Product Design · Creditas · 2024", en: "Product Design Case · Creditas · 2024" },
      title: { pt: "Redesign da Homepage", en: "Homepage Redesign" },
      subtitle: { pt: "Redesenhando a homepage da Creditas para equilibrar conversão e construção de marca.", en: "Redesigning the Creditas homepage to balance conversion and brand-building." },
      meta: [
        { l: { pt: "Papel", en: "Role" }, v: { pt: "Staff Product Designer", en: "Staff Product Designer" } },
        { l: { pt: "Duração", en: "Timeline" }, v: { pt: "Abril → Dezembro 2024", en: "April → December 2024" } },
        { l: { pt: "Escopo", en: "Scope" }, v: { pt: "Redesign da homepage, do discovery à entrega", en: "Homepage redesign, from discovery to delivery" } },
        { l: { pt: "Colaboração", en: "Collaboration" }, v: { pt: "Marketing, engenharia e unidades de negócio", en: "Marketing, engineering, and business units" } },
      ],
      sections: [
        {
          num: "01",
          title: { pt: "O problema", en: "Problem statement" },
          body: {
            pt: [
              "A homepage da Creditas é a principal vitrine da empresa para o mercado — o primeiro ponto de contato em que os usuários descobrem nossa proposta de valor.",
              "Entre 2023 e 2024, a Creditas fez parceria com a agência criativa Rebu em uma iniciativa de rebranding que foi além de atualizações visuais. Esse redesign foi uma oportunidade de repensar como a homepage contribui para a percepção de marca, a confiança dos clientes e a performance do negócio.",
            ],
            en: [
              "The Creditas homepage is the company's main showcase to the market — the first touchpoint where users discover our value proposition.",
              "Between 2023 and 2024, Creditas partnered with the creative agency Rebu in a rebranding initiative that went beyond visual updates. This redesign was an opportunity to rethink how the homepage contributes to brand perception, customer trust, and business performance.",
            ],
          },
        },
        {
          num: "02",
          title: { pt: "Meu papel e processo", en: "My role and process" },
          body: {
            pt: ["Como Staff Product Designer, liderei o redesign do discovery à entrega, em colaboração com times de marketing, engenharia e unidades de negócio."],
            en: ["As Staff Product Designer, I led the redesign from discovery to delivery, collaborating with marketing, engineering, and business unit teams."],
          },
          items: [
            { title: { pt: "Discovery & Research", en: "Discovery & Research" }, desc: { pt: "Análise de dados, entrevistas com usuários e benchmarking.", en: "Data analysis, user interviews, and benchmarking." } },
            { title: { pt: "Definição", en: "Definition" }, desc: { pt: "Identificação de pontos de dor e redefinição da arquitetura.", en: "Identifying pain points and redefining architecture." } },
            { title: { pt: "Design", en: "Design" }, desc: { pt: "Prototipação, validação e testes A/B.", en: "Prototyping, validation, and A/B testing." } },
            { title: { pt: "Entrega", en: "Delivery" }, desc: { pt: "Prototipação, validação e testes A/B.", en: "Prototyping, validation, and A/B testing." } },
          ],
          case: { pt: "Colaboração constante com marketing, engenharia e áreas de negócio foi a base de cada etapa do processo.", en: "Ongoing collaboration with marketing, engineering, and business teams underpinned every stage of the process." },
        },
        {
          num: "03",
          title: { pt: "Descoberta e insights — pesquisa quantitativa", en: "Discovery & Insights — Quantitative Research" },
          body: {
            pt: ["Analisamos dados de heatmaps de abril de 2024 e do Google Analytics para entender os padrões de interação. Principal descoberta: os usuários gastavam mais tempo tentando localizar informações relevantes do que explorando o conteúdo de marca."],
            en: ["We analyzed data from April 2024 heatmaps and Google Analytics to understand interaction patterns. Key finding: users were spending more time trying to locate relevant information than exploring brand content."],
          },
          stats: [
            { v: "9.1K", l: { pt: "sessões desktop concentradas em \"Login\" e simulações de empréstimo.", en: "desktop sessions focused mainly on \"Log in\" and loan simulations." } },
            { v: "13.2K", l: { pt: "sessões mobile concentradas no menu de navegação.", en: "mobile sessions concentrated around the navigation menu." } },
          ],
        },
        { isImage: true, src: HOMEPAGE_HEATMAP_IMG, centered: true, width: 768, caption: { pt: "Heatmap da homepage da Creditas antes do redesign — abril de 2024.", en: "Creditas homepage heatmap before the redesign — April 2024." } },
        {
          num: "04",
          title: { pt: "Benchmarking e arquitetura de conteúdo", en: "Competitive Benchmarking & Content Architecture" },
          body: {
            pt: [
              "Mapeamos concorrentes diretos e indiretos dos setores financeiro e fintech. A maioria já havia evoluído para páginas orientadas a storytelling, combinando clareza de produto com engajamento emocional.",
              "Essa análise, somada a uma revisão do conteúdo e da arquitetura da homepage, evidenciou nossa oportunidade: reposicionar a homepage como canal de conversão e, ao mesmo tempo, ponto de construção de marca.",
            ],
            en: [
              "We mapped direct and indirect competitors across the financial and fintech sectors. Most competitors had already evolved toward storytelling-driven pages, combining product clarity with emotional engagement.",
              "This analysis, combined with a review of the homepage's content and architecture, highlighted our opportunity: to reposition the homepage as both a conversion channel and a brand-building touchpoint.",
            ],
          },
        },
        {
          num: "05",
          title: { pt: "Design", en: "Design" },
          body: {
            pt: ["A nova homepage dá vida à identidade rebrandizada da Creditas por meio de:"],
            en: ["The new homepage brings Creditas' rebranded identity to life through:"],
          },
          items: [
            { title: { pt: "Hero dinâmico", en: "Dynamic hero visuals" }, desc: { pt: "Visuais de hero dinâmicos que refletem histórias reais de clientes.", en: "Reflecting real customer stories." } },
            { title: { pt: "Micro-interações", en: "Micro-animations" }, desc: { pt: "Micro-animações e transições suaves que reforçam a personalidade da marca.", en: "Smooth transitions that reinforce brand personality." } },
            { title: { pt: "Cards de produto", en: "Curated product cards" }, desc: { pt: "Integrados a conteúdo educativo e histórias de parceiros.", en: "Integrated with educational content and partner stories." } },
            { title: { pt: "Layouts responsivos", en: "Responsive layouts" }, desc: { pt: "Garantindo consistência entre dispositivos.", en: "Ensuring consistency across devices." } },
          ],
          case: { pt: "Visualmente, o design consolida a Creditas como uma marca moderna, humana e inovadora — equilibrando performance e conexão emocional.", en: "Visually, the design consolidates Creditas as a modern, human, and innovative brand — balancing performance and emotional connection." },
        },
        { isVideo: true, src: HOMEPAGE_DEMO_VIDEO, caption: { pt: "Demonstração da nova homepage em funcionamento.", en: "Walkthrough of the new homepage in action." } },
        {
          num: "06",
          title: { pt: "Resultados-chave", en: "Key results" },
          body: {
            pt: ["Embora o tempo na página tenha diminuído, os usuários localizaram o conteúdo-chave de forma mais eficiente — um sinal de melhoria na navegação e na relevância do conteúdo."],
            en: ["Although time on page decreased, users located key content more efficiently — a sign of improved navigation and content relevance."],
          },
          stats: [
            { v: "+45%", l: { pt: "aumento no engajamento com a LP de Auto.", en: "increase in engagement with the Auto LP." } },
            { v: "+111%", l: { pt: "aumento no engajamento com a LP de Home Equity.", en: "increase in engagement with the Home Equity LP." } },
            { v: "+14.5%", l: { pt: "crescimento nas conversões originadas pela homepage.", en: "growth in homepage-driven conversions." } },
          ],
        },
        {
          num: "07",
          title: { pt: "Métricas antes e depois", en: "Before & after metrics" },
          body: {
            pt: ["Acompanhamos a performance da homepage em dois períodos comparáveis — antes e depois do lançamento — combinando analytics quantitativo com a pesquisa qualitativa do discovery."],
            en: ["We tracked homepage performance across two comparable periods — before and after launch — combining quantitative analytics with the qualitative research from discovery."],
          },
          table: {
            head: { pt: ["Métrica", "Antes", "Depois"], en: ["Metric", "Before", "After"] },
            rows: [
              [{ pt: "Sessões totais", en: "Total sessions" }, "4.8K", "5.2K (+8%)"],
              [{ pt: "Cliques (click-throughs)", en: "Click-throughs" }, "453", "623 (+37%)"],
              [{ pt: "Tempo médio na página", en: "Avg. time on page" }, "1:00", "0:57 (-5%)"],
              [{ pt: "Taxa de rejeição", en: "Bounce rate" }, "58,5%", "62,3% (↑ usuários encontram info. mais rápido)"],
              [{ pt: "Usuários recorrentes", en: "Returning users" }, "33,9%", "40,5% (+6,6%)"],
            ],
          },
          learnings: [
            { title: { pt: "Design é a ponte entre negócio e experiência.", en: "Design is the bridge between business and experience." }, desc: { pt: "Alinhar necessidades de negócio com a experiência do usuário foi a base de todas as decisões do projeto.", en: "Aligning business needs with user experience was the foundation of every decision in the project." } },
            { title: { pt: "Marca não é só visual — é sobre como o usuário percebe valor.", en: "Brand isn't just visual — it's about how users perceive value." }, desc: { pt: "Repensar a marca significou repensar como o valor é comunicado, não apenas a estética.", en: "Rethinking the brand meant rethinking how value is communicated, not just the aesthetics." } },
            { title: { pt: "Alinhamento entre áreas é essencial para decisões estratégicas.", en: "Cross-team alignment is essential for strategic decisions." }, desc: { pt: "O maior desafio foi alinhar as expectativas de múltiplas unidades de negócio e stakeholders de marketing.", en: "The greatest challenge was aligning the expectations of multiple business units and marketing stakeholders." } },
          ],
          closing: {
            headline: { pt: "Uma presença digital redefinida", en: "A redefined digital presence" },
            quote: { pt: "Apesar das restrições de tempo, o redesign foi entregue no prazo e reforçou o posicionamento da Creditas como uma fintech humana e orientada a dados.", en: "Despite time constraints, the redesign was delivered on schedule and reinforced Creditas' positioning as a human-centered, data-driven fintech brand." },
            text: { pt: "A homepage redesenhada redefiniu com sucesso a presença digital da Creditas — melhorando usabilidade, engajamento e a percepção de inovação, mantendo-se fiel ao propósito da marca: empoderar pessoas a alcançar seus objetivos por meio de soluções de crédito mais inteligentes.", en: "The redesigned homepage successfully redefined Creditas' digital presence — improving usability, engagement, and perception of innovation, while staying true to the brand's purpose: empowering people to achieve their goals through smarter credit solutions." },
          },
        },
      ],
    },
  },
  { id: "portal-parceiro-2", file: "portal-parceiro-2.app", company: "Creditas", year: "2025", isProtected: false, coverImage: PARTNER2_COVER_IMAGE, thumb: PARTNER2_THUMB,
    title: { pt: "Portal do Parceiro", en: "Partner Portal" },
    desc: { pt: "Discovery e redesign do Portal do Parceiro da Creditas para reduzir dependência operacional e aumentar a autonomia dos parceiros.", en: "Discovery and redesign of Creditas' Partner Portal to reduce operational dependency and increase partner autonomy." },
    industry: { pt: "Financeiro · Crédito", en: "Financial · Credit" },
    service: { pt: "Design de produto", en: "Product design" },
    solution: { pt: "Portal do Parceiro", en: "Partner Portal" },
    cs: {
      eyebrow: { pt: "Case de Product Design · Creditas · 2025", en: "Product Design Case · Creditas · 2025" },
      title: { pt: "Portal do Parceiro", en: "Partner Portal" },
      subtitle: { pt: "Transformando o Portal do Parceiro em um hub de autoaprendizagem e operação para hunters, executivos e parceiros.", en: "Turning the Partner Portal into a self-learning and operational hub for hunters, executives, and partners." },
      meta: [
        { l: { pt: "Ano", en: "Year" }, v: { pt: "2025", en: "2025" } },
        { l: { pt: "Cliente", en: "Client" }, v: { pt: "Creditas", en: "Creditas" } },
        { l: { pt: "Categoria", en: "Category" }, v: { pt: "Portal do Parceiro", en: "Partner Portal" } },
        { l: { pt: "Duração do produto", en: "Product Duration" }, v: { pt: "10 meses", en: "10 months" } },
      ],
      sections: [
        {
          num: "01",
          title: { pt: "O problema", en: "The problem" },
          body: {
            pt: [
              "Com a expansão das parcerias de Home Equity e Auto, cresceu a demanda por um onboarding eficiente de parceiros — mas os processos seguiam manuais, descentralizados e sem padronização, com onboarding e gestão do relacionamento concentrados em cada executivo de conta.",
              "Isso resultava em materiais inconsistentes, dificuldade para medir o real entendimento dos parceiros, alto volume de dúvidas recorrentes e gargalos em fluxos críticos como simulação e criação de leads.",
              "O objetivo deste discovery foi entender a jornada completa do parceiro, ponta a ponta, e desenhar oportunidades para transformar o Portal em um verdadeiro hub de autoaprendizagem e operação.",
            ],
            en: [
              "As Creditas expanded its Home Equity and Auto partnerships, demand grew for efficient partner onboarding — but the processes stayed manual, decentralized, and unstandardized, with onboarding and relationship management concentrated in each account executive.",
              "This led to inconsistent materials, difficulty measuring how well partners actually understood the process, a high volume of recurring questions, and bottlenecks in critical flows like simulation and lead creation.",
              "The goal of this discovery was to understand the end-to-end partner journey and design opportunities to make the Portal a true self-learning and operational hub.",
            ],
          },
        },
        {
          num: "02",
          title: { pt: "Objetivos do discovery", en: "Goals of the Discovery" },
          body: {
            pt: ["Entender a jornada do parceiro do hunting → onboarding → farming."],
            en: ["Understand the partner journey from hunting → onboarding → farming."],
          },
          items: [
            { title: { pt: "Reduzir dependência", en: "Reduce dependency" }, desc: { pt: "Identificar oportunidades para reduzir a dependência dos executivos de conta.", en: "Identify opportunities to reduce dependency on executives." } },
            { title: { pt: "Mapear dores", en: "Map pain points" }, desc: { pt: "Mapear dores, necessidades e expectativas entre executivos, hunters e parceiros.", en: "Map pains, needs, and expectations across executives, hunters, and partners." } },
            { title: { pt: "Analisar dados", en: "Analyze data" }, desc: { pt: "Analisar os dados do Portal para identificar padrões de comportamento e pontos de abandono.", en: "Analyze Portal data to identify behavioral patterns and drop-off points." } },
            { title: { pt: "Propor melhorias", en: "Propose improvements" }, desc: { pt: "Propor melhorias de produto que aumentem adoção, autonomia e geração de leads.", en: "Propose product improvements that increase adoption, autonomy, and lead generation." } },
          ],
          case: { pt: "Entender a jornada do parceiro do hunting → onboarding → farming era a lente que guiava todas as outras frentes.", en: "Understanding the partner journey from hunting → onboarding → farming was the lens guiding every other workstream." },
        },
        {
          num: "03",
          title: { pt: "Metodologia", en: "Methodology" },
          body: {
            pt: ["Mapeamos o ciclo de vida completo do parceiro, com foco em lacunas de aprendizagem, atrito operacional e pontos recorrentes de confusão (Journey Mapping)."],
            en: ["We mapped the complete partner lifecycle, focusing on learning gaps, operational friction, and recurring points of confusion (Journey Mapping)."],
          },
          findings: [
            { title: { pt: "Executivos", en: "Executives" }, desc: { pt: "Identificaram dores relacionadas a materiais desatualizados, regras de elegibilidade pouco claras e falta de visibilidade sobre a compreensão dos parceiros.", en: "Identified pains related to outdated materials, unclear eligibility rules, and lack of visibility into partner comprehension." }, verdict: { pt: "5 entrevistados", en: "5 respondents" } },
            { title: { pt: "Hunters", en: "Hunters" }, desc: { pt: "Destacaram a necessidade de apresentações atualizadas, materiais intuitivos e mais transparência sobre o status das propostas.", en: "Highlighted the need for updated presentations, intuitive materials, and better transparency on proposal statuses." }, verdict: { pt: "3 entrevistados", en: "3 respondents" } },
            { title: { pt: "Pesquisa com parceiros", en: "Partner Survey" }, desc: { pt: "Mediu o nível de conhecimento, a qualidade do onboarding e dúvidas recorrentes sobre os produtos AE e HE.", en: "Measured knowledge levels, onboarding quality, and recurring doubts across AE and HE products." }, verdict: { pt: "90 respondentes", en: "90 respondents" } },
          ],
          signal: { pt: "As três frentes de escuta apontaram para a mesma causa raiz: suporte fragmentado e dependente de pessoas.", en: "All three listening tracks pointed to the same root cause: fragmented, people-dependent support." },
          stats: [
            { v: "-32%", l: { pt: "em simulações de Home Equity — sinal claro de atrito em um fluxo crítico de receita.", en: "drop in Home Equity simulation — a clear sign of friction in a revenue-critical flow." } },
            { v: "-83%", l: { pt: "na criação de leads de Home Equity (dados de Amplitude).", en: "drop in HE lead creation (Amplitude data)." } },
          ],
        },
        { isImage: true, src: PARTNER_JOURNEY_IMG, centered: true, width: 1920, caption: { pt: "Mapeamento da jornada do parceiro no contexto de Home Equity — do contato comercial ao atendimento recorrente.", en: "Partner journey mapping for the Home Equity context — from first commercial contact to ongoing support." } },
        {
          num: "04",
          title: { pt: "Principais insights", en: "Key Insights" },
          body: {
            pt: ["A análise cruzada de dados, entrevistas e pesquisa revelou um padrão claro."],
            en: ["The cross-analysis of data, interviews, and survey revealed a clear pattern."],
          },
          items: [
            { title: { pt: "Onboarding não padronizado", en: "Lack of standardized onboarding" }, desc: { pt: "Os materiais de treinamento variam por executivo, muitas vezes desatualizados e raramente revisitados pelo parceiro.", en: "Training materials vary by executive, often outdated and rarely revisited by the partner." } },
            { title: { pt: "Demanda por autoaprendizagem", en: "Demand for self-learning content" }, desc: { pt: "Executivos e parceiros pediram vídeos, guias passo a passo, resumos de política e diretrizes comerciais.", en: "Executives and partners requested videos, step-by-step guides, policy summaries, and commercial guidelines." } },
            { title: { pt: "Baixa visibilidade do status da proposta", en: "Low visibility of proposal status" }, desc: { pt: "Parceiros têm dificuldade para entender etapas, documentação necessária, elegibilidade e motivos de reprovação.", en: "Partners struggle to understand stages, documentation needs, eligibility, and disapproval reasons." } },
            { title: { pt: "Alto atrito em fluxos críticos", en: "High friction in critical flows" }, desc: { pt: "Simulação e criação de lead apresentam taxas de abandono significativas, impactando diretamente a receita.", en: "Simulation and lead creation show significant drop-off rates, directly impacting revenue." } },
            { title: { pt: "Alta rotatividade de executivos", en: "High rotation of executives" }, desc: { pt: "Parceiros frequentemente recebem suporte inconsistente.", en: "Partners often receive inconsistent support." } },
          ],
          case: { pt: "Juntos, esses pontos mostravam um padrão: a experiência do parceiro dependia demais de pessoas, e pouco de produto.", en: "Together, these points showed a pattern: the partner experience depended too much on people, and too little on product." },
        },
        {
          num: "05",
          title: { pt: "Oportunidades identificadas", en: "Opportunities Identified" },
          body: {
            pt: ["A partir do discovery, mapeamos quatro frentes de oportunidade para o Portal."],
            en: ["From the discovery, we mapped four opportunity areas for the Portal."],
          },
          items: [
            { title: { pt: "A. Hub de autoaprendizagem", en: "A. Self-Learning Hub" }, desc: { pt: "Um espaço centralizado com apresentações atualizadas, vídeos curtos (\"pílulas de conhecimento\"), resumos de política, regras de elegibilidade, condições comerciais, checklists de documentação e scripts de venda — reduzindo a dependência dos executivos e garantindo informação consistente e atualizada.", en: "A centralized space with updated presentations, short \"knowledge pills\" videos, policy summaries, eligibility rules, commercial conditions, documentation checklists, and sales scripts — reducing dependency on executives and ensuring consistent, up-to-date information." } },
            { title: { pt: "B. Novo modelo de permissões", en: "B. New Permission Model" }, desc: { pt: "Introdução de papéis distintos para escalar a governança do Portal: Admin da matriz, Admin de filial, Consultor/Agente e Desenvolvedor.", en: "Introducing distinct roles to scale Portal governance: Head Office Admin, Branch Admin, Consultant/Agent, and Developer." } },
            { title: { pt: "C. Transparência de proposta e status", en: "C. Proposal and Status Transparency" }, desc: { pt: "Visão kanban de todas as etapas, visibilidade detalhada do funil, melhor experiência de upload de documentos e motivos de reprovação com próximos passos.", en: "Kanban view of all stages, detailed funnel visibility, improved document upload experience, and disapproval reasons with next steps." } },
            { title: { pt: "D. Relatórios e analytics de performance", en: "D. Reporting & Performance Analytics" }, desc: { pt: "Métricas de originação, funil de leads (aprovados, em andamento, recusados), insights de performance de crédito e histórico de comportamento — hoje dependentes de planilhas manuais que o Portal pode centralizar e automatizar.", en: "Origination metrics, lead funnel (approved, in progress, declined), credit performance insights, and historical behavior — today reliant on manual spreadsheets that the Portal can centralize and automate." } },
          ],
          case: { pt: "As quatro frentes compartilhavam o mesmo princípio: tirar do executivo o peso de ser a única fonte de informação e controle.", en: "All four fronts shared the same principle: taking off the executive's shoulders the weight of being the only source of information and control." },
        },
        { isImage: true, src: PARTNER_DASHBOARD_IMG, centered: true, width: 1920, caption: { pt: "Dashboard do agente — visão geral, propostas, performance e relatórios.", en: "Agent dashboard — overview, proposals, performance, and reports." } },
        {
          num: "",
          title: { pt: "Resultados alcançados", en: "Results Achieved" },
          body: {
            pt: ["Alguns ganhos já saíram do papel enquanto o discovery avançava."],
            en: ["A few wins already shipped while the discovery moved forward."],
          },
          stats: [
            { v: "+23p.p.", l: { pt: "de conversão no funil de lead (60,8% → 83,8%).", en: "conversion gain in the lead funnel (60.8% → 83.8%)." } },
            { v: "31 → 19", l: { pt: "campos no formulário — quase metade a menos.", en: "fields in the form — almost half as many." } },
          ],
          items: [
            { title: { pt: "Novo formulário one-page", en: "New one-page form" }, desc: { pt: "Fluxo simplificado em página única, com redução de campos de 31 para 19, elevou a conversão de 60,8% para 83,8%.", en: "A simplified one-page flow, cutting fields from 31 to 19, raised conversion from 60.8% to 83.8%." } },
            { title: { pt: "Coleta de dados do cônjuge", en: "Spouse data collection" }, desc: { pt: "Para Home Equity, melhora a qualidade do lead e reduz retrabalho nas etapas de análise de crédito.", en: "For Home Equity, improves lead quality and reduces rework in later credit-analysis stages." } },
            { title: { pt: "Novo fluxo de envio de documentos", en: "New document submission flow" }, desc: { pt: "Permite que o parceiro anexe todos os documentos do cliente de uma só vez, com tipagem automática que agiliza o processo.", en: "Lets the partner attach all client documents at once, with automatic typing that speeds up the process." } },
            { title: { pt: "Nova listagem de propostas", en: "New proposal listing" }, desc: { pt: "Mais clareza e autonomia para o parceiro, reduzindo dúvidas recorrentes e retrabalho dos executivos.", en: "More clarity and autonomy for the partner, reducing recurring doubts and executive rework." } },
            { title: { pt: "Novo detalhamento de proposta", en: "New proposal detail" }, desc: { pt: "Maior previsibilidade da operação, com parceiros entendendo melhor as etapas e requisitos do processo.", en: "Greater operational predictability, with partners better understanding the process stages and requirements." } },
          ],
          case: { pt: "Cinco entregas, uma mesma direção: tirar do parceiro a dependência de perguntar e dar a ele clareza para agir sozinho.", en: "Five releases, one direction: freeing the partner from having to ask, and giving them clarity to act on their own." },
        },
        {
          num: "",
          title: { pt: "UI Kit", en: "UI Kit" },
          body: {
            pt: [
              "Como parte do projeto, criei um UI kit próprio para o Portal do Parceiro. O conjunto inclui painéis de visualização de dados que facilitam a gestão de performance e a geração de relatórios em cada nível — do parceiro ao time de executivos — além dos níveis de navegação que sustentam essa gestão.",
              "O projeto foi todo modularizado para que outros designers pudessem integrar facilmente seus produtos ao Portal.",
            ],
            en: [
              "As part of the project, I created a dedicated UI kit for the Partner Portal. The set includes data-visualization panels that make performance management and reporting easier at every level — from partner to the executive team — along with the navigation levels that support that management.",
              "The whole project was modularized so other designers could easily integrate their products into the Portal.",
            ],
          },
          items: [
            { title: { pt: "Painéis de dados", en: "Data panels" }, desc: { pt: "Visualizações de performance e relatórios para parceiros e para o time de executivos, em cada nível de gestão.", en: "Performance visualizations and reporting for partners and the executive team, at every management level." } },
            { title: { pt: "Navegação em níveis", en: "Layered navigation" }, desc: { pt: "Estrutura de navegação que organiza o acesso de acordo com o papel de cada usuário no Portal.", en: "Navigation structure that organizes access according to each user's role in the Portal." } },
            { title: { pt: "Sistema modular", en: "Modular system" }, desc: { pt: "Componentes reutilizáveis para que outros times de design integrem seus produtos ao Portal com consistência.", en: "Reusable components so other design teams can integrate their products into the Portal consistently." } },
          ],
          case: { pt: "O UI kit deu ao Portal uma linguagem visual própria e escalável — a base para que cada novo produto do parceiro nascesse consistente.", en: "The UI kit gave the Portal its own scalable visual language — the foundation for every new partner product to launch consistent." },
        },
        { isImage: true, src: UI_KIT_IMG, centered: true, width: 1920, caption: { pt: "Componentes do UI kit: níveis de permissão e navegação, notificações e painéis de visualização de dados.", en: "UI kit components: permission and navigation levels, notifications, and data-visualization panels." } },
        { isVideo: true, src: PORTAL_DEMO_VIDEO, centered: true, width: 1280, loop: true, caption: { pt: "Protótipo do Portal do Parceiro em funcionamento.", en: "Prototype of the Partner Portal in action." } },
        { isImage: true, src: SCREENS_IMG, zoomable: true, caption: { pt: "Telas do fluxo de propostas — do envio de documentos à listagem e ao detalhamento. Clique para dar zoom em alta definição.", en: "Proposal flow screens — from document submission to the listing and detail views. Click to zoom in high definition." } },
        {
          num: "06",
          title: { pt: "Próximos passos", en: "Next Steps" },
          body: {
            pt: [
              "O projeto redefiniu a forma como os parceiros interagem com a Creditas, trazendo clareza, eficiência e um caminho estruturado para o crescimento B2B.",
              "A partir daqui, a visão de longo prazo é um portal autônomo, educacional, orientado a dados e preparado para o futuro:",
            ],
            en: [
              "The project redefined how partners interact with Creditas, bringing clarity, efficiency, and a structured path for B2B growth.",
              "From here, the long-term vision is an autonomous, educational, data-driven portal built for the future:",
            ],
          },
          items: [
            { title: { pt: "01. Onboarding personalizado", en: "01. Personalized onboarding" }, desc: { pt: "Por tipo de parceiro, segmentando conteúdo de apoio e orientações na plataforma.", en: "By partner type, segmenting support content and guidance across the platform." } },
            { title: { pt: "02. Dashboards integrados", en: "02. Integrated dashboards" }, desc: { pt: "Com funil, KPIs e performance, flexibilizando relatórios.", en: "With funnel, KPIs, and performance, making reporting more flexible." } },
            { title: { pt: "03. Autonomia de ponta a ponta", en: "03. End-to-end autonomy" }, desc: { pt: "Maior transparência nas etapas e motivos de negativa.", en: "Greater transparency into stages and reasons for decline." } },
          ],
          case: { pt: "Do onboarding ao dashboard, a meta é a mesma: um parceiro cada vez mais autônomo.", en: "From onboarding to dashboard, the goal stays the same: an increasingly autonomous partner." },
        },
        {
          num: "07",
          title: { pt: "Impacto", en: "Impact" },
          body: {
            pt: [
              "Embora ainda em andamento, o discovery já gerou um entendimento unificado das necessidades dos parceiros entre as equipes, um roadmap de melhorias de curto, médio e longo prazo, e aumento na conversão de leads a partir de ajustes orientados por dados.",
              "Também reduziu a dependência operacional dos executivos e aproximou o Portal de uma experiência mais escalável, consistente e educativa para o parceiro.",
            ],
            en: [
              "Although still in progress, the discovery has already created a unified understanding of partner needs across teams, a roadmap of short-, mid-, and long-term improvements, and increased lead conversion through data-informed adjustments.",
              "It has also reduced operational dependency on executives and moved toward a more scalable, consistent, and educational partner experience.",
            ],
          },
        },
        {
          num: "08",
          title: { pt: "Meu papel", en: "My Role" },
          body: {
            pt: ["Conduzi esse discovery de ponta a ponta:"],
            en: ["I led this discovery end to end:"],
          },
          items: [
            { title: { pt: "Liderança do discovery", en: "Discovery leadership" }, desc: { pt: "Liderei todo o processo de discovery, do planejamento da pesquisa à síntese.", en: "Led the entire discovery process, from research planning to synthesis." } },
            { title: { pt: "Pesquisa", en: "Research" }, desc: { pt: "Conduzi a análise de dados, entrevistas com stakeholders, pesquisas e mapeamento de jornada.", en: "Conducted analytics review, stakeholder interviews, surveys, and journey mapping." } },
            { title: { pt: "Oportunidades e requisitos", en: "Opportunities & requirements" }, desc: { pt: "Defini as oportunidades e os requisitos para a nova experiência do Portal.", en: "Defined opportunities and requirements for the new Portal experience." } },
            { title: { pt: "Fluxos e arquitetura", en: "Flows & architecture" }, desc: { pt: "Desenhei os fluxos, modelos de interação e a arquitetura da informação.", en: "Designed improved flows, interaction models, and the information architecture." } },
            { title: { pt: "Colaboração multidisciplinar", en: "Cross-team collaboration" }, desc: { pt: "Colaborei com os times de Produto, Vendas, Performance e Gestão de Parceiros.", en: "Collaborated with Product, Sales, Performance, and Partner Management teams." } },
            { title: { pt: "Priorização", en: "Prioritization" }, desc: { pt: "Priorizei funcionalidades para desenvolvimento com base no impacto no negócio e nas necessidades do parceiro.", en: "Prioritized features for development based on business impact and partner needs." } },
          ],
          case: { pt: "Do discovery ao roadmap, conduzi o processo de ponta a ponta — da escuta à priorização.", en: "From discovery to roadmap, I led the process end to end — from listening to prioritization." },
        },
      ],
    },
  },
  { id: "nav-saude", file: "nav-saude.app", company: "Dasa", year: "2020", isProtected: false, coverImage: NAVSAUDE_COVER_IMAGE, thumb: NAVSAUDE_THUMB,
    title: { pt: "Nav Saúde", en: "Nav Saúde" },
    desc: { pt: "Discovery e MVP de uma plataforma de agendamento e compra de vacinas para a Dasa.", en: "Discovery and MVP for a vaccine scheduling and purchasing platform for Dasa." },
    industry: { pt: "Saúde", en: "Health" },
    service: { pt: "Design de produto", en: "Product design" },
    solution: { pt: "Nav Saúde", en: "Nav Saúde" },
    cs: {
      eyebrow: { pt: "Case de Product Design · Dasa · 2020", en: "Product Design Case · Dasa · 2020" },
      title: { pt: "Nav Saúde", en: "Nav Saúde" },
      subtitle: { pt: "Entender o cenário de vacinas no Brasil e na Dasa, mapear as necessidades do usuário e propor solução para o MVP e melhorias futuras.", en: "Understanding the vaccination landscape in Brazil and at Dasa, mapping user needs, and proposing a solution for the MVP and future improvements." },
      meta: [
        { l: { pt: "Ano", en: "Year" }, v: { pt: "2020", en: "2020" } },
        { l: { pt: "Cliente", en: "Client" }, v: { pt: "Dasa", en: "Dasa" } },
        { l: { pt: "Categoria", en: "Category" }, v: { pt: "Plataforma e app de saúde", en: "Health platform & app" } },
      ],
      sections: [
        {
          num: "01",
          title: { pt: "Objetivos do projeto", en: "Project goals" },
          body: {
            pt: ["Entender o cenário de vacinas no Brasil e na Dasa, mapear as necessidades do usuário e propor solução para o MVP e melhorias futuras."],
            en: ["Understand the vaccination landscape in Brazil and at Dasa, map user needs, and propose a solution for the MVP and future improvements."],
          },
          items: [
            { title: { pt: "Panorama de vacinação", en: "Vaccination landscape" }, desc: { pt: "Entendimento e alinhamento do panorama atual de vacinação no Brasil e na Dasa.", en: "Understanding and aligning on the current vaccination landscape in Brazil and at Dasa." } },
            { title: { pt: "Necessidades do cliente", en: "Client needs" }, desc: { pt: "Mapeamento das necessidades, dores, ganhos e oportunidades do cliente de vacinas.", en: "Mapping the vaccine client's needs, pain points, gains, and opportunities." } },
            { title: { pt: "Solução: futuro e momento atual", en: "Solution: present and future" }, desc: { pt: "Definição de uma solução que atendesse o momento atual do produto e também sua visão de futuro.", en: "Defining a solution that addressed the product's current moment as well as its future vision." } },
          ],
          case: { pt: "Da compreensão do cenário à proposta de solução — do MVP às melhorias futuras.", en: "From understanding the landscape to proposing a solution — from MVP to future improvements." },
        },
        {
          num: "02",
          title: { pt: "Processo", en: "Process" },
          body: {
            pt: ["A pesquisa combinou dados quantitativos e qualitativos em três etapas, da coleta de dados à consolidação dos aprendizados."],
            en: ["The research combined quantitative and qualitative data across three stages, from data collection to consolidating the learnings."],
          },
          items: [
            { title: { pt: "Levantamento de dados", en: "Data gathering" }, desc: { pt: "Analytics de e-commerce e agendamento de vacinas; NPS, benchmark, desk research e CRM.", en: "E-commerce and vaccine-scheduling analytics; NPS, benchmarking, desk research, and CRM." } },
            { title: { pt: "Entrevistas e iterações", en: "Interviews & iterations" }, desc: { pt: "Entrevistas com o time de e-commerce e operação de vacinas. Qualitativo com 6 usuários que compraram vacinas e quantitativo em Lavoisier, Delboni e Lavoisier (6.500 pessoas).", en: "Interviews with the e-commerce and vaccine operations teams. Qualitative research with 6 users who purchased vaccines, and quantitative research across Lavoisier, Delboni, and Lavoisier (6,500 people)." } },
            { title: { pt: "Consolidação", en: "Consolidation" }, desc: { pt: "Entendimento de usuários, comportamentos, dores e necessidades; mapeamento dos problemas de operação; definição de soluções futuras e do recorte para o momento atual.", en: "Understanding users, behaviors, pain points, and needs; mapping operational problems; defining future solutions and the scope for the current moment." } },
          ],
          case: { pt: "Da coleta de dados à consolidação — um processo estruturado para embasar cada decisão.", en: "From data collection to consolidation — a structured process to ground every decision." },
        },
        { isImage: true, src: NAVSAUDE_VACCOV_IMG, centered: true, width: 1999, caption: { pt: "Cobertura vacinal por capital brasileira, 2012–2020 — queda acentuada nos últimos anos do período.", en: "Vaccination coverage by Brazilian state capital, 2012–2020 — a sharp decline in the last years of the period." } },
        {
          num: "03",
          title: { pt: "Pesquisa: panorama de vacinas no Brasil", en: "Research: the vaccine landscape in Brazil" },
          body: {
            pt: ["Três achados moldaram o entendimento sobre como os brasileiros se relacionam com a vacinação."],
            en: ["Three findings shaped our understanding of how Brazilians relate to vaccination."],
          },
          findings: [
            { title: { pt: "Qual vacina tomar?", en: "Which vaccine to take?" }, desc: { pt: "A vacina certa depende da faixa etária, mas boa parte das pessoas não sabe que a imunização é essencial em todas as fases da vida — não apenas na infância ou na terceira idade.", en: "The right vaccine depends on age group, but many people aren't aware that immunization is essential at every stage of life — not just in childhood or old age." }, verdict: { pt: "Falta de clareza", en: "Lack of clarity" } },
            { title: { pt: "Calendário de vacinação complexo", en: "A complex vaccination calendar" }, desc: { pt: "Metade dos brasileiros não verifica a própria carteirinha. Isso só muda quando alguém lembra, um médico solicita, ou surge um surto, epidemia ou pandemia.", en: "Half of Brazilians never check their own vaccination card. That only changes when someone reminds them, a doctor requests it, or an outbreak, epidemic, or pandemic emerges." }, verdict: { pt: "Baixo acompanhamento", en: "Low follow-through" } },
            { title: { pt: "Falsa sensação de segurança", en: "A false sense of safety" }, desc: { pt: "Como doenças, epidemias e surtos deixaram de ser visíveis no dia a dia, parte da população não vê motivo para se vacinar.", en: "Since diseases, epidemics, and outbreaks are no longer visible in everyday life, part of the population sees no reason to get vaccinated." }, verdict: { pt: "Risco silencioso", en: "Silent risk" } },
          ],
          signal: { pt: "Esses três pontos moldaram a estratégia de conscientização e o desenho da jornada de agendamento.", en: "These three points shaped the awareness strategy and the design of the scheduling journey." },
        },
        {
          num: "04",
          title: { pt: "OKRs", en: "OKRs" },
          body: {
            pt: ["O projeto foi guiado por três objetivos de negócio de longo prazo."],
            en: ["The project was guided by three long-term business objectives."],
          },
          items: [
            { title: { pt: "Liderança", en: "Leadership" }, desc: { pt: "Ser a maior empresa de vacinação do país.", en: "Becoming the country's largest vaccination company." } },
            { title: { pt: "Experiência do cliente", en: "Customer experience" }, desc: { pt: "Ser reconhecida como a melhor experiência em vacinação.", en: "Being recognized for the best vaccination experience." } },
            { title: { pt: "Diversificação de receita", en: "Revenue diversification" }, desc: { pt: "Possuir novas frentes de vacinação — B2B e B2C.", en: "Building new vaccination revenue streams — B2B and B2C." } },
          ],
          case: { pt: "Liderança, experiência e diversificação de receita como pilares de negócio do produto.", en: "Leadership, experience, and revenue diversification as the product's business pillars." },
        },
        {
          num: "05",
          title: { pt: "Panorama benchmark", en: "Benchmark landscape" },
          body: {
            pt: ["O mapeamento de referências do mercado revelou funcionalidades recorrentes entre os principais players de vacinação."],
            en: ["Mapping market references revealed recurring features among the leading vaccination players."],
          },
          items: [
            { title: { pt: "Vacinação domiciliar", en: "At-home vaccination" }, desc: { pt: "Aplicação da vacina no conforto de casa.", en: "Vaccine administration in the comfort of home." } },
            { title: { pt: "Serviço de conferência de vacinas", en: "Vaccine record check" }, desc: { pt: "Serviço para checar quais vacinas já foram tomadas e quais estão em dia.", en: "A service to check which vaccines have already been taken and which are up to date." } },
            { title: { pt: "Compra por categoria", en: "Purchase by category" }, desc: { pt: "Filtrar vacinas por categorias, como infantil, viagem ou gripe.", en: "Filtering vaccines by category, such as children's, travel, or flu." } },
            { title: { pt: "Combos de vacina", en: "Vaccine bundles" }, desc: { pt: "Pacotes com mais de uma vacina em uma única compra.", en: "Bundles with more than one vaccine in a single purchase." } },
            { title: { pt: "Comprar para outra pessoa", en: "Buying for someone else" }, desc: { pt: "Permitir agendar e pagar a vacina de terceiros, como filhos e familiares.", en: "Allowing users to schedule and pay for someone else's vaccine, like a child or family member." } },
            { title: { pt: "Pagamento flexível", en: "Flexible payment" }, desc: { pt: "Escolher entre pagar no local ou antecipadamente, online.", en: "Choosing to pay on-site or in advance, online." } },
          ],
          case: { pt: "Key learnings que orientaram as features priorizadas para o MVP.", en: "Key learnings that guided the features prioritized for the MVP." },
        },
        { isImage: true, src: NAVSAUDE_BENCHMATRIX_IMG, centered: true, width: 1734, caption: { pt: "Matriz de benchmark comparando features entre players de vacinação.", en: "Benchmark matrix comparing features across vaccination players." } },
        {
          num: "06",
          title: { pt: "Nosso usuário", en: "Our user" },
          body: {
            pt: ["Entender como e por que o usuário agenda vacinas hoje foi essencial para desenhar a nova jornada."],
            en: ["Understanding how and why users schedule vaccines today was essential to designing the new journey."],
          },
          items: [
            { title: { pt: "Canal de agendamento", en: "Scheduling channel" }, desc: { pt: "Costuma marcar primeiro pessoalmente, depois por telefone e, por último, pelo site da clínica ou laboratório.", en: "Usually schedules in person first, then by phone, and lastly through the clinic or lab's website." } },
            { title: { pt: "Quem agenda primeiro", en: "Who gets scheduled first" }, desc: { pt: "Agenda a própria vacina primeiro; o agendamento para os filhos costuma ser sazonal.", en: "Schedules their own vaccine first; scheduling for children tends to be seasonal." } },
            { title: { pt: "Critérios de escolha", en: "Selection criteria" }, desc: { pt: "Localização, data, horário e disponibilidade da vacina são os principais critérios na hora de agendar.", en: "Location, date, time, and vaccine availability are the main criteria when scheduling." } },
          ],
          case: { pt: "Um usuário que ainda depende de canais tradicionais, mas está pronto para migrar para o digital.", en: "A user who still relies on traditional channels, but is ready to move to digital." },
        },
        {
          num: "07",
          title: { pt: "Necessidades", en: "Needs" },
          body: {
            pt: ["A pesquisa quantitativa reforçou o que as entrevistas já sinalizavam: falta de clareza e de organização são as maiores barreiras."],
            en: ["The quantitative research reinforced what the interviews had already signaled: lack of clarity and organization are the biggest barriers."],
          },
          stats: [
            { v: "45%", l: { pt: "dizem ser fundamental ter clareza de quais vacinas tomar antes de comprar.", en: "say it's essential to have clarity on which vaccines to take before buying." } },
            { v: "25%", l: { pt: "garantem estar com a vacina em dia.", en: "confirm they're up to date on their vaccines." } },
          ],
          items: [
            { title: { pt: "Conscientização", en: "Awareness" }, desc: { pt: "Falta de clareza sobre quais vacinas são indicadas em cada momento dificulta a decisão de compra.", en: "Lack of clarity about which vaccines are indicated at each moment makes the purchase decision harder." } },
            { title: { pt: "Organização e planejamento", en: "Organization & planning" }, desc: { pt: "A rotina de quem tem filhos, trabalha e precisa conciliar horários exige otimizar a experiência para respeitar o tempo do cliente e do paciente.", en: "The routine of people with children and jobs, juggling schedules, calls for an experience that respects the client's and patient's time." } },
            { title: { pt: "Segurança", en: "Safety" }, desc: { pt: "Em contexto de pandemia, insegurança em comparecer a laboratórios sem necessidade e dúvida se a vacina indicada é realmente a certa para cada pessoa.", en: "In a pandemic context, unease about visiting labs unnecessarily, and doubt about whether the indicated vaccine is really the right one for each person." } },
          ],
          case: { pt: "Conscientização, organização e segurança como as três necessidades centrais do usuário.", en: "Awareness, organization, and safety as the user's three core needs." },
        },
        { isImage: true, src: NAVSAUDE_MVP_SCREENS_IMG, caption: { pt: "Telas do fluxo de agendamento — da busca por vacina à confirmação do agendamento.", en: "Scheduling flow screens — from the vaccine search to the booking confirmation." } },
        {
          num: "08",
          title: { pt: "Features do MVP", en: "MVP features" },
          body: {
            pt: ["A partir da pesquisa e do benchmark, definimos o escopo de features para o MVP da nova jornada de agendamento."],
            en: ["Based on the research and benchmark, we defined the feature scope for the MVP of the new scheduling journey."],
          },
          items: [
            { title: { pt: "Filtro por idade", en: "Age filter" }, desc: { pt: "Filtrar vacinas indicadas por faixa etária.", en: "Filter vaccines indicated by age group." } },
            { title: { pt: "Mais de uma vacina", en: "More than one vaccine" }, desc: { pt: "Adicionar mais de uma vacina em um mesmo agendamento.", en: "Add more than one vaccine to the same booking." } },
            { title: { pt: "Busca por endereço ou CEP", en: "Search by address or zip code" }, desc: { pt: "Buscar unidades pelo endereço ou CEP cadastrado.", en: "Find units by registered address or zip code." } },
            { title: { pt: "Filtrar e ordenar resultados", en: "Filter & sort results" }, desc: { pt: "Refinar e ordenar a lista de unidades disponíveis.", en: "Refine and sort the list of available units." } },
            { title: { pt: "Escolher laboratório, data e horário", en: "Choose lab, date & time" }, desc: { pt: "Selecionar o laboratório, a data e o horário do agendamento.", en: "Select the lab, date, and time for the appointment." } },
            { title: { pt: "Resumo do agendamento", en: "Booking summary" }, desc: { pt: "Resumo do agendamento com informações sobre pagamento.", en: "A booking summary with payment information." } },
            { title: { pt: "Comprovante de agendamento", en: "Booking confirmation" }, desc: { pt: "Tela de comprovante após concluir o agendamento.", en: "A confirmation screen after completing the booking." } },
            { title: { pt: "Adicionar ao calendário", en: "Add to calendar" }, desc: { pt: "Adicionar o evento de vacinação ao calendário pessoal.", en: "Add the vaccination event to a personal calendar." } },
            { title: { pt: "Compartilhar agendamento", en: "Share the booking" }, desc: { pt: "Compartilhar os detalhes do agendamento com outra pessoa.", en: "Share the booking details with someone else." } },
            { title: { pt: "Card de agendamento na home", en: "Booking card on the home" }, desc: { pt: "Card com as informações do agendamento na home da plataforma.", en: "A card with booking information on the platform's home screen." } },
          ],
          case: { pt: "Dez features essenciais para levar o agendamento de vacinas do zero ao MVP.", en: "Ten essential features to take vaccine scheduling from zero to MVP." },
        },
      ],
    },
  },
  { id: "onboarding", hidden: true, file: "onboarding-pf.app", company: "Itaú", year: "2021", isProtected: true,
    title: { pt: "Onboarding digital PF", en: "Digital onboarding" },
    desc: { pt: "Redesenho do fluxo de abertura de conta para novos clientes.", en: "Redesign of the account-opening flow for new customers." },
    industry: { pt: "Financeiro · Bancos", en: "Financial · Banking" },
    service: { pt: "Redesenho de fluxo", en: "Flow redesign" },
    solution: { pt: "Onboarding digital", en: "Digital onboarding" } },
  { id: "neon-app", hidden: true, file: "app.neon", company: "Neon", year: "2020", isProtected: false,
    title: { pt: "App bancário mobile-first", en: "Mobile-first banking app" },
    desc: { pt: "Evolução da experiência principal do app, de ponta a ponta.", en: "End-to-end evolution of the app's core experience." },
    industry: { pt: "Financeiro · Banco digital", en: "Financial · Digital banking" },
    service: { pt: "Evolução de produto", en: "Product evolution" },
    solution: { pt: "App bancário", en: "Banking app" } },
  { id: "credito", hidden: true, file: "credito-consignado.app", company: "Creditas", year: "2019", isProtected: true,
    title: { pt: "Plataforma de crédito", en: "Credit platform" },
    desc: { pt: "Simulação e contratação de crédito consignado.", en: "Simulation and application flow for payroll loans." },
    industry: { pt: "Financeiro · Crédito", en: "Financial · Credit" },
    service: { pt: "Design de fluxo de crédito", en: "Credit flow design" },
    solution: { pt: "Plataforma de crédito", en: "Credit platform" } },
  { id: "saude", hidden: true, file: "portal-paciente.app", company: "Dasa", year: "2018", isProtected: false,
    title: { pt: "Portal do paciente", en: "Patient portal" },
    desc: { pt: "Acesso a exames e agendamentos em um único lugar.", en: "Exam results and scheduling, in a single place." },
    industry: { pt: "Saúde", en: "Health" },
    service: { pt: "Design de portal", en: "Portal design" },
    solution: { pt: "Portal do paciente", en: "Patient portal" } },
];

const logoSVGs = {
  itau: `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" class="h-full w-auto"><path d="M218.676 10.574c-13.797.328-23.918.813-42.473 1.957-8.582.512-17.95 1.266-24.547 1.926-1.656.18-5.12.512-7.68.754-10.753 1.055-26.718 3.07-33.433 4.215-1.418.242-3.496.574-4.668.754-1.145.152-3.195.511-4.52.754-1.324.242-3.554.664-4.968.902-4.973.844-13.434 2.562-18.223 3.707-1.328.332-3.707.902-5.273 1.266-1.567.359-2.98.691-3.16.722-8.829 2.106-17.594 6.356-24.34 11.867C38.824 44.73 32.953 53.344 30 61.898c-.48 1.325-.965 2.68-1.113 3.012-.512 1.145-2.742 10.781-4.34 18.676-.238 1.324-.66 3.281-.902 4.367-.243 1.082-.57 2.98-.782 4.215-.183 1.234-.422 2.742-.574 3.312-.453 1.72-2.289 13.465-3.465 21.989-1.144 8.254-1.898 14.25-2.558 20.332-.332 2.98-.664 5.902-.723 6.476-.09.57-.363 3.493-.633 6.477-.242 2.98-.601 6.625-.785 8.133-.633 5.539-2.2 29.668-2.98 46.687-.602 12.617-.993 39.637-.782 54.367.211 18.372.66 34.79 1.082 40.512.153 2.317.453 7.2.633 10.844.18 3.644.422 8.312.574 10.39.692 10.422 1.235 17.258 1.504 19.426.153 1.328.512 4.852.754 7.801.242 2.953.602 6.477.754 7.832.18 1.356.512 4.277.75 6.508.754 7.137 1.328 11.805 1.809 14.91.242 1.656.664 4.488.902 6.324.875 6.625 1.898 13.07 3.012 18.977.242 1.324.633 3.555.906 4.969.512 3.011 1.687 9.007 2.531 12.8 2.89 13.286 4.156 17.258 7.559 23.797.933 1.805 2.137 3.914 2.68 4.668.511.754 1.265 1.836 1.656 2.41 1.718 2.559 6.629 7.559 9.34 9.489.449.328 1.324.96 1.894 1.414.606.48 1.176.843 1.328.843.121 0 .422.211.66.454 1.176 1.144 9.461 5.09 13.012 6.144.664.211 1.477.48 1.809.633.785.36 5.21 1.473 10.543 2.68 2.32.543 4.699 1.113 5.27 1.265 1.386.36 10.12 2.106 16.718 3.313 3.793.691 11.176 1.867 15.812 2.531 1.747.238 3.977.57 4.97.75 3.644.633 18.706 2.383 28.163 3.285 3.403.332 7.59.723 9.336.902 2.832.301 5.723.543 19.578 1.536 2.078.152 6.809.422 10.543.605 3.735.18 8.946.45 11.598.602 21.445 1.234 82.77 1.234 103.914 0 2.652-.18 7.863-.422 11.598-.602 6.414-.3 8.765-.453 18.824-1.207 12.89-.992 31.84-2.832 38.254-3.734 1.836-.27 5-.692 7.078-.965 7.68-.992 18.223-2.59 24.246-3.703 6.598-1.207 15.332-2.953 16.719-3.313.57-.152 2.949-.722 5.27-1.265 5.21-1.176 9.73-2.32 10.542-2.68a174.8 174.8 0 0 1 3.012-1.055c2.469-.812 10.664-4.699 11.355-5.363.211-.211.813-.66 1.325-.965 2.351-1.473 3.433-2.316 5.574-4.246 2.41-2.2 5.754-5.812 6.566-7.047.27-.422.993-1.445 1.594-2.258.633-.843 1.145-1.597 1.145-1.718 0-.122.484-.965 1.054-1.868.575-.902 1.266-2.23 1.54-2.953.3-.691.6-1.445.722-1.593.57-.754 2.68-6.75 3.582-10.153 1.418-5.27 4.066-17.71 5.031-23.586.242-1.504.512-2.918.602-3.16.273-.664 1.93-10.996 3.433-21.535.332-2.32.664-4.64.754-5.121.243-1.387 1.325-10.633 1.809-15.512.238-2.41.57-5.183.75-6.176.184-.996.512-4.246.754-7.23.242-2.98.574-6.656.723-8.133.18-1.504.453-4.937.632-7.68.18-2.742.453-6.113.602-7.53.183-1.415.512-6.626.754-11.595.273-4.972.574-11.086.754-13.554 1.355-21.899 1.355-79.368 0-101.957-.153-2.563-.422-7.59-.602-11.145-.183-3.555-.453-8.254-.605-10.394-.18-2.168-.57-7.5-.903-11.895-.332-4.398-.664-8.527-.754-9.187-.09-.665-.359-3.586-.601-6.477-.242-2.89-.512-5.602-.602-6.023-.09-.422-.422-3.196-.754-6.176-.78-7.2-1.746-15.149-1.957-16.082-.09-.422-.422-2.832-.754-5.305-1.476-11.262-4.214-26.957-6.566-37.648-.332-1.508-.871-3.946-1.203-5.422-.844-3.856-1.84-7.742-2.168-8.434-.152-.332-.422-1.144-.633-1.808-.664-2.227-4.008-9.668-4.851-10.844-.122-.18-1.082-1.594-2.11-3.16-2.137-3.223-7.617-8.946-10.902-11.356-6.504-4.789-13.735-8.043-23.07-10.332a440.932 440.932 0 0 1-4.82-1.207c-1.114-.328-3.345-.812-8.134-1.805a396.317 396.317 0 0 1-4.066-.875c-5.813-1.414-24.73-4.488-37.047-6.054-2.473-.301-4.91-.633-5.422-.75-.906-.184-5.273-.633-14.156-1.508-2.473-.242-5.875-.602-7.531-.754-1.656-.18-4.64-.45-6.625-.633-1.989-.148-5.242-.422-7.23-.57-6.747-.574-25.481-1.656-35.844-2.11-20.032-.874-57.02-1.144-79.97-.57ZM85.965 214.098c.18.148 1.055.422 1.926.632 1.629.391 3.918 1.446 5.632 2.59 1.356.903 4.551 4.336 5.18 5.543.305.602.633 1.145.723 1.235.094.09.363.691.605 1.355.211.66.48 1.356.633 1.504.39.574.844 4.156.844 6.809 0 2.59-.395 5.632-.906 6.746-1.625 3.734-2.41 4.968-4.457 7.14-1.899 1.957-2.68 2.559-5.27 3.825-2.11 1.054-3.617 1.597-4.82 1.714-.965.121-1.809.332-1.899.454-.21.363-6.746.363-6.746 0 0-.122-.754-.333-1.719-.454-.933-.117-2.105-.39-2.617-.601a30.998 30.998 0 0 0-1.988-.813c-.574-.21-1.117-.453-1.207-.543-.09-.12-.543-.39-1.055-.632-1.746-.872-5.36-4.88-6.414-7.079-.574-1.175-1.113-2.32-1.265-2.558-1.024-2.05-1.204-11.387-.243-13.555.274-.574.664-1.535.875-2.11.211-.57.453-1.113.543-1.202.09-.09.45-.696.782-1.356.574-1.117 4.156-4.972 4.668-4.972.12 0 .394-.211.605-.48.57-.634 3.492-2.048 5.27-2.5.843-.212 1.777-.513 2.109-.665.332-.148 1.144-.3 1.805-.39 1.777-.18 8.015.09 8.406.363Zm328.191 20.992v15.21h-58.433v-20.359l3.254-.515c7.199-1.113 11.687-1.867 11.957-2.047.18-.121 1.656-.36 3.312-.57 1.656-.211 3.164-.485 3.313-.606.183-.117 1.597-.39 3.164-.601 1.566-.18 3.613-.543 4.52-.782.902-.21 2.8-.543 4.214-.722 1.418-.184 2.832-.453 3.164-.575.332-.148 1.836-.421 3.313-.632 1.507-.18 3.191-.45 3.765-.633.57-.149 2.742-.57 4.82-.903 2.079-.332 4.79-.78 6.024-.992 1.234-.242 2.559-.422 2.95-.453l.663-.031Zm-249.398 13.433v18.043h30.12v26.809H164.73l.118 27.922c.093 30.09.03 28.613 1.66 32.316 1.234 2.864 4.726 5.785 7.738 6.508.512.121 1.086.36 1.328.543.57.45 12.77.45 13.313-.031.238-.18 1.324-.422 2.468-.543l2.02-.211v26.418l-.816.36c-.75.331-4.215.874-8.973 1.445-6.777.785-19.129.875-19.852.12-.18-.148-.66-.269-1.113-.269-1.176 0-6.055-.906-6.418-1.176-.18-.12-.992-.422-1.836-.601-.812-.211-1.625-.485-1.808-.602-.149-.152-.84-.422-1.504-.633-.664-.21-1.266-.484-1.356-.574-.09-.09-.633-.422-1.207-.754-2.5-1.324-3.25-1.804-4.578-2.922-.781-.632-1.504-1.171-1.656-1.171-.301-.032-2.59-2.532-4.395-4.82-1.386-1.778-3.437-5.18-4.129-6.93-.242-.57-.511-1.114-.601-1.204-.121-.09-.422-1.023-.723-2.109-.273-1.082-.633-2.227-.785-2.559-.148-.332-.512-1.687-.75-3.011a144.286 144.286 0 0 0-.816-3.766c-.211-.902-.36-11.508-.45-31.566l-.12-30.18h-17.442v-26.809h17.473v-30.363l2.046-.21c1.114-.118 2.168-.329 2.32-.45.18-.121 1.657-.39 3.313-.602 1.656-.21 3.164-.515 3.313-.632.18-.121 2.078-.454 4.218-.723 2.168-.305 4.067-.633 4.215-.754.18-.121 1.176-.332 2.258-.422a49.719 49.719 0 0 0 4.219-.691c3.223-.664 8.855-1.54 9.125-1.387.121.059.21 8.254.21 18.191Zm99.851 15.18c4.215.242 8.977.785 9.336 1.055.18.12.903.332 1.657.422 1.718.273 5.906 1.507 8.433 2.53 2.11.845 6.809 3.192 7.531 3.798.243.18.782.539 1.204.722.421.211 1.75 1.262 2.921 2.29 1.176 1.054 2.262 1.957 2.41 2.015.454.211 5.813 6.719 5.813 7.078 0 .09.274.575.606 1.024.632.906 3.312 6.117 3.312 6.449 0 .117.242.781.57 1.473.301.695.664 1.75.786 2.32.12.574.332 1.176.449 1.355.12.153.394 1.114.605 2.11.18.992.422 2.02.512 2.258.121.242.39 1.535.633 2.863.36 1.988.449 9.488.57 42.68l.121 40.3h-32.86l-.03-3.554c-.032-1.926-.122-4.727-.243-6.204l-.18-2.71-.874 1.203c-1.383 1.84-5.934 6.175-7.739 7.379-3.949 2.593-5 3.222-6.086 3.586-.664.18-1.535.543-1.957.78-.453.212-1.566.575-2.472.755-.903.21-1.805.484-1.957.601-1.535 1.145-20.512 1.117-21.989-.027-.148-.121-1.234-.39-2.41-.602-1.144-.21-2.5-.543-3.011-.785-.48-.21-1.778-.754-2.829-1.176a42.42 42.42 0 0 1-3.554-1.746 49.866 49.866 0 0 0-2.442-1.414c-1.265-.695-1.687-1.086-5.12-4.52-3.524-3.523-3.977-4.003-3.977-4.335 0-.121-.391-.785-.84-1.477-.485-.691-1.176-1.957-1.54-2.773-.359-.84-.843-1.836-1.054-2.258-.238-.422-.57-1.504-.781-2.41-.211-.903-.48-1.805-.602-1.957-.332-.422-.906-4.7-.906-6.567 0-.87-.148-1.746-.328-1.925-.363-.364-.274-1.567.66-8.829.18-1.414.453-2.71.574-2.859.121-.18.39-.965.57-1.777.391-1.567 1.208-3.614 2.051-5.153.27-.511.63-1.203.813-1.566.18-.39.422-.691.57-.691.121 0 .211-.18.211-.391 0-.332 3.313-4.64 3.887-5.031.12-.09.332-.39.422-.692.12-.332.48-.632.812-.722.332-.09.602-.274.602-.395 0-.3 5.062-4.277 6.777-5.27 1.234-.753 4.008-2.167 8.043-4.097.574-.3 6.203-2.106 8.676-2.8.902-.27 2.68-.634 3.914-.813 1.234-.211 2.41-.453 2.562-.57.18-.122 1.985-.395 4.067-.575 2.078-.18 4.637-.48 5.722-.633 4.278-.632 19.305-.511 20.903.153.543.238.57.12.36-2.442-.118-1.476-.329-2.742-.45-2.832-.152-.09-.332-.66-.453-1.265-.211-1.114-1.356-3.551-2.438-5.211-.695-1.051-3.617-4.067-3.949-4.067-.117 0-.629-.3-1.144-.691-1.325-.965-3.461-1.926-4.758-2.168-.633-.121-1.145-.332-1.145-.453 0-1.324-19.457-1.535-25.3-.239-.754.149-2.5.48-3.915.723-1.418.238-2.832.57-3.164.723-.332.148-1.414.422-2.41.601-.992.18-2.078.453-2.41.602-.332.152-1.535.484-2.68.754-1.144.27-2.23.57-2.41.722-.18.122-.992.422-1.836.633-.812.211-1.656.512-1.808.633-.18.121-.993.39-1.809.602-.84.18-2.016.601-2.617.902-.633.332-1.207.574-1.297.574-.09 0-.152-6.297-.152-13.976 0-10.875.093-14.036.394-14.278.211-.18 1.055-.48 1.867-.691.844-.18 1.657-.453 1.805-.574.184-.121 1.176-.48 2.262-.754 1.082-.301 2.105-.63 2.258-.75.18-.153 1.113-.395 2.078-.602.996-.21 2.02-.484 2.258-.633.273-.12 1.507-.453 2.742-.722a58.95 58.95 0 0 0 2.863-.633c.328-.094 2.016-.363 3.762-.606 1.75-.238 3.586-.57 4.066-.722 1.75-.54 17.531-1.535 21.086-1.324.992.058 3.164.18 4.82.27ZM98.492 326.508v59.937H63.254V266.566h35.238Zm266.266-22.594c0 35.664.152 42.563.875 43.527.148.149.332.75.453 1.325.422 2.257 2.379 5.543 4.605 7.77 1.176 1.206 2.5 2.26 2.922 2.378.453.094.785.274.785.395 0 .117 1.055.539 2.348.96 1.93.606 2.953.723 5.965.723 2.11 0 3.945-.148 4.367-.328.39-.21 1.324-.512 2.078-.723.754-.21 2.11-.843 3.012-1.449 1.687-1.082 4.82-3.972 4.82-4.457 0-.148.422-.812.903-1.445.511-.664.906-1.324.906-1.504 0-.184.27-.816.57-1.418.332-.602.692-1.625.813-2.258.09-.664.3-1.324.453-1.476.754-.965.875-7.047.875-42.38v-36.988h35.238v119.88H420.06c-13.04 0-16.778-.09-16.957-.391-.122-.18-.27-3.043-.332-6.325-.06-3.253-.211-5.933-.329-5.933-.12 0-.484.36-.843.812-1.688 2.29-4.34 4.88-8.496 8.313-.602.48-1.836 1.144-4.547 2.469-1.235.601-2.59 1.296-3.012 1.507-.422.211-1.566.543-2.563.754-.992.211-1.867.48-1.957.602-.3.45-5.632.902-10.902.902-5.18 0-9.398-.36-10.633-.875-.332-.148-1.476-.511-2.562-.781-1.082-.27-2.078-.633-2.258-.754-.148-.121-.871-.422-1.566-.633-.723-.18-1.293-.449-1.293-.57 0-.121-.543-.39-1.207-.602-.66-.21-1.204-.484-1.204-.605 0-.117-.332-.36-.722-.54-2.59-1.175-8.465-6.687-10.934-10.241-1.508-2.168-3.828-6.508-4.308-8.102-.18-.633-.543-1.566-.754-2.05-.211-.512-.57-1.594-.754-2.41-.18-.84-.45-1.716-.602-2.016-.148-.274-.422-1.688-.601-3.164-.18-1.446-.512-2.922-.692-3.254-.273-.45-.394-11.204-.453-43.313l-.09-42.68h35.27Zm0 0" style="stroke:none;fill-rule:nonzero;fill:#FF6200;fill-opacity:1"/><path d="M260.691 333.164c-1.472.149-2.98.39-3.312.54-.332.183-1.414.452-2.41.663-.961.18-2.258.543-2.86.813-4.52 1.957-6.718 3.254-8.222 4.82-1.446 1.508-2.895 4.309-3.133 6.055-.063.601-.274 1.386-.453 1.715-.332.695-.211 2.832.332 5.632.601 3.043 3.012 6.75 5.148 7.864 3.797 1.957 4.52 2.257 6.63 2.59 3.792.57 11.023.242 12.589-.602.27-.152 1.387-.664 2.469-1.145 1.086-.511 2.5-1.328 3.164-1.84.664-.511 1.414-1.113 1.687-1.324 1.715-1.293 4.88-6.535 5.301-8.703.09-.543.332-1.176.512-1.418.21-.27.36-3.043.422-8.012l.12-7.59-1.628-.179c-2.2-.273-13.04-.18-16.356.121Zm0 0" style="stroke:none;fill-rule:nonzero;fill:#FF6200;fill-opacity:1"/></svg>`,
  bradesco: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123 23.1" class="h-full w-auto"><title>logosAtivo 23</title><path d="M34.6,9.8a6.2,6.2,0,0,0-2.6.6V4.1a11.8,11.8,0,0,0-2.9,1.6A1.6,1.6,0,0,0,28.5,7V22.4a13.9,13.9,0,0,0,4.6.7c4.6,0,7.2-2.8,7.2-6.8S38.5,9.8,34.6,9.8ZM33.3,20.3a3.2,3.2,0,0,1-1.3-.2v-7a5.4,5.4,0,0,1,2-.4c1.8,0,2.7,1.2,2.7,3.5S35.6,20.3,33.3,20.3ZM11.6,16.4l-1.4.8c-.2.1-.2.2-.2.4v5.1c0,.2.1.3.2.3h1.4V16.4ZM49.2,9.9a4.2,4.2,0,0,0-3.5,1.8,12.4,12.4,0,0,0-.4-1.6l-1.4-.2-1.4.2V22.8a4.4,4.4,0,0,0,1.7.2l1.8-.2V16.6c0-2.5,1.3-3.8,3-3.8h1.2a8.8,8.8,0,0,0,0-2.8Zm-35,5-1.8,1h-.1v6.9h2a.4.4,0,0,0,.4-.4V15.2A.3.3,0,0,0,14.2,14.9Zm-2.8-10A22.5,22.5,0,0,0,7,5.3a8.2,8.2,0,0,1,6.6-3.2A9,9,0,0,1,19,3.9c.2.2.4.3.6.1a.4.4,0,0,0,0-.6A9.3,9.3,0,0,0,12.2,0,9.5,9.5,0,0,0,3.5,6.1L.3,7.4q-.4.3-.3.6a.4.4,0,0,0,.6.2,18.3,18.3,0,0,1,2.5-.6A6.1,6.1,0,0,0,3,9a9.3,9.3,0,0,0,4.3,8c.2.1.5.1.6-.1s.1-.4-.1-.6a7.9,7.9,0,0,1-2.6-6,6.4,6.4,0,0,1,.7-3.1L8.7,7c6.8,0,12.6,2.3,12.6,5.2s-1.9,3-4.2,4c-.5.2-.5.4-.5.6s.3.3.6.2c4-1.2,6.9-3.4,6.9-5.9S18.5,4.9,11.4,4.9ZM71.3,7v3l-1.8-.2c-3.9,0-6.5,2.6-6.5,6.8s2.5,6.5,6.5,6.5a15.1,15.1,0,0,0,5.3-.8V4.1a11.8,11.8,0,0,0-2.9,1.6A1.4,1.4,0,0,0,71.3,7Zm0,13.1a4.1,4.1,0,0,1-1.5.2c-2.3,0-3.2-1.5-3.2-3.7s.9-4,3.2-4l1.5.2Zm35.8.2c-1.7,0-2.9-1.4-2.9-3.8s1-3.8,2.9-3.8a5.9,5.9,0,0,1,2.3.4,6,6,0,0,1,1.2-2.4,7.5,7.5,0,0,0-3.9-.9c-3.9,0-6.1,2.7-6.1,6.7s2.3,6.6,6.2,6.6a8,8,0,0,0,3.9-.8,9.7,9.7,0,0,1-1.4-2.5A4.7,4.7,0,0,1,107.1,20.3ZM55.7,9.8a15.3,15.3,0,0,0-3.8.4,6.6,6.6,0,0,0,0,2.8,10.6,10.6,0,0,1,3.2-.4c1.8,0,2.7.7,2.7,2.2V15l-1.7-.2c-2.9,0-5.5,1.1-5.5,4s2.3,4.3,5.7,4.3a19.9,19.9,0,0,0,4.8-.7V15.1C61.1,11.6,59.2,9.9,55.7,9.8Zm2.1,10.5H56.3c-1.6,0-2.5-.5-2.5-1.6s.9-1.6,2.5-1.6h1.5ZM116.9,9.8c-3.9,0-6.1,2.7-6.1,6.7s2.3,6.6,6.1,6.6,6.1-2.6,6.1-6.6S120.8,9.8,116.9,9.8Zm0,10.5c-2,0-2.5-1.6-2.5-3.8s.5-3.9,2.5-3.9,2.6,1.6,2.6,3.9S118.8,20.3,116.9,20.3ZM82.8,9.8c-3.7,0-6,2.5-6,6.7s2.4,6.6,6.6,6.6a9.9,9.9,0,0,0,4-.7,6.2,6.2,0,0,0,0-2.7,11.8,11.8,0,0,1-3.6.6c-2,0-3.3-.8-3.6-2.8h7.9a9.9,9.9,0,0,0,.2-1.8C88.3,11.9,86.1,9.8,82.8,9.8Zm-2.6,5.1a2.5,2.5,0,0,1,2.6-2.4c1.6,0,2.2,1,2.2,2.4Zm16.1.4-1.5-.6c-.8-.4-1.2-.6-1.2-1.2s.7-1,1.6-1a11,11,0,0,1,3.3.6,5.7,5.7,0,0,0,0-2.6,8.3,8.3,0,0,0-3.8-.7C92,9.8,90,11.2,90,13.4s.8,3,3.2,4l1.1.4c1,.4,1.3.7,1.3,1.4s-1,1.1-1.8,1.1a9.9,9.9,0,0,1-3.8-.7,4.2,4.2,0,0,0,0,2.7,9.4,9.4,0,0,0,4.3.8c2.7,0,4.9-1.4,4.9-3.9S98.3,16.1,96.3,15.3Z" fill="#E5173F"/></svg> `,
  neon: `<svg viewBox="0 0 72 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-auto"><path d="M70.3337 7.71989L69.8752 8.63971C68.6252 11.1997 67.8338 10.9799 68 9.97944L68.9793 4.29985C69.4795 1.41976 68.8337 0 67.1046 0C64.5007 0 61.8546 3.5198 59.438 8.69947L59.1045 9.39948L59.7709 4.29985C60.1461 1.33973 59.5625 0 57.9585 0C55.9171 0 53.4794 2.10004 51.917 5.63958C51.1878 2.25956 48.2294 0 44.3961 0C40.3755 0 37.1669 2.43991 35.6879 5.85994L35.3339 6.68C33.7088 10.4196 30.7925 11.92 28.5216 11.92C26.8964 11.92 25.6881 11.2803 25.4175 9.48006C32.1464 9.18021 34.7298 6.88009 34.7298 4.12005C34.7298 1.89996 32.959 0 29.313 0C25.667 0 22.3962 1.85994 20.3964 5.97999L19.3132 8.21982C18.459 9.97999 17.8759 10.6597 17.5008 10.6597C17.209 10.6597 17.1051 10.4799 17.209 9.85994L18.1672 4.3004C18.6674 1.42031 18.0216 0.000548706 16.2919 0.000548706C13.688 0.000548706 11.0419 3.52035 8.62534 8.70002L8.29186 9.40003L8.95824 4.3004C9.33341 1.34028 8.74982 0.000548706 7.14581 0.000548706C4.83316 0.000548706 2.04199 2.76059 0.39572 7.24024L0 8.32013H1.66682L2.10423 7.42003C3.22915 5.15993 3.70824 5.34028 3.60431 6.34014L2.76319 11.7002C2.26297 14.5802 2.9088 16 4.63844 16C7.38336 16 9.00507 11.3855 11.6255 7.34055C12.0212 6.76058 12.3336 6.90037 12.2502 7.38057L11.3959 12.3404C11.0208 14.5205 11.8334 16 13.9998 16C15.9579 16 17.9999 14.1603 19.9373 10.2201C20.5209 13.6001 23.3955 16 27.2705 16C31.1454 16 34.0205 13.1199 35.2288 9.97999C35.8535 13.5201 39.041 16 42.9371 16C46.4786 16 50.0201 13.8199 51.4996 10.2601L52.6874 7.42003C53.6455 5.11991 54.5209 5.34028 54.4164 6.34014L53.5753 11.7002C53.0751 14.5802 53.7209 16 55.4505 16C58.1955 16 59.8172 11.3855 62.4376 7.34055C62.8333 6.76058 63.1457 6.90037 63.0629 7.38057L62.2086 12.3404C61.8335 14.5205 62.6672 16 64.6669 16C67.5837 16 70.042 12.66 71.7082 8.46046L72 7.72043H70.3332L70.3337 7.71989ZM28.855 3.44032C29.6048 3.44032 29.9383 3.8202 29.9383 4.4802C29.9383 5.40003 29.2925 6.86035 25.4386 7.54008C25.8138 5.08044 27.3761 3.44032 28.855 3.44032ZM42.876 12.3399C41.5843 12.3399 40.7301 11.26 40.7301 9.52008C40.7301 7.5801 41.8761 3.66013 44.4595 3.66013C45.7511 3.66013 46.6054 4.74003 46.6054 6.47992C46.6054 8.4199 45.4593 12.3399 42.876 12.3399Z" fill="url(#paint0_linear_261_35051)"/><defs><linearGradient id="paint0_linear_261_35051" x1="0.00171308" y1="8" x2="72" y2="8" gradientUnits="userSpaceOnUse"><stop stop-color="#008FFF"/><stop offset="1" stop-color="#00FFF2"/></linearGradient></defs></svg> `,
  dasa: `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1540 415" class="h-full w-auto"><path fill-rule="evenodd" class="a" d="m271.5 26.1q46.8 25.3 70.6 71.7 23.8 46.5 23.8 109.7c0 42.2-7.9 78.8-23.8 109.8-15.9 30.9-39.4 54.9-70.6 71.7q-46.7 25.2-113 25.2h-158v-413.4h158q66.3 0 113 25.3zm-20 285.1q33.1-35.7 33.1-103.7 0-67.9-33.1-103.6-33.1-35.7-94.2-35.7h-78.4v278.7h78.4q61.1 0 94.2-35.7zm356.5-310.4h158v413.5h-158q-66.3 0-113.1-25.3c-31.1-16.9-54.6-40.7-70.6-71.7-15.8-31-23.8-67.6-23.8-109.8 0-42.2 8-78.7 23.8-109.7 16-31 39.5-54.9 70.6-71.7q46.8-25.3 113.1-25.3zm1.1 346.1h78.5v-278.7h-78.5q-61 0-94.1 35.7c-22.1 23.8-33.1 58.3-33.1 103.6 0 45.3 11 79.9 33.1 103.7q33.1 35.7 94.1 35.7zm772.7-346.1h158v413.5h-158q-66.2 0-113-25.3c-31.2-16.9-54.7-40.7-70.6-71.7-15.9-31-23.9-67.6-23.9-109.8 0-42.2 8-78.7 23.9-109.7 15.9-31 39.4-54.9 70.6-71.7q46.8-25.3 113-25.3zm1.1 346.1h78.5v-278.7h-78.5q-61 0-94.1 35.7c-22.1 23.8-33.1 58.3-33.1 103.6 0 45.3 11 79.9 33.1 103.7q33.1 35.7 94.1 35.7zm-449.1 42.1c-31.2 16.8-68.8 25.3-113 25.3h-16v-67.4h14.8q61.1 0 94.2-35.7 33.1-35.7 33.1-103.7c0-42.1 7.9-78.7 23.8-109.7 15.9-31 39.4-54.9 70.6-71.7 31.2-16.9 68.8-25.3 113-25.3h16v67.4h-14.8q-61 0-94.2 35.7c-22 23.8-33.1 58.4-33.1 103.6q0 63.3-23.8 109.8-23.8 46.5-70.6 71.7z"/></svg>`,
  creditas: `<svg viewBox="0 0 241 51" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-auto"><path d="M38.6838 50.7568H12.2901C5.50258 50.7568 0 45.28 0 38.5183V12.2384C0 5.48189 5.50258 0 12.2901 0H38.6838C45.4713 0 50.9739 5.47671 50.9739 12.2384V38.5183C50.9739 45.2749 45.4713 50.7568 38.6838 50.7568Z" fill="#8EDB00"/><path d="M15.8601 26.7358C15.8601 26.7358 16.3524 35.6892 23.0518 38.9742C25.5544 40.2022 27.4922 40.6996 29.6373 40.6996C33.3523 40.6996 35.9067 39.798 37.886 38.399C40.658 36.4457 41.7978 33.798 41.7978 33.798L36.3678 33.2591C36.3678 33.2591 33.5958 37.3317 28.1503 37.4094C17.2591 37.5752 15.855 26.7306 15.855 26.7306" fill="#292929"/><path d="M15.9149 23.3319C15.9149 23.3319 16.4071 14.3784 23.1065 11.0934C25.6091 9.86546 27.5469 9.36804 29.692 9.36804C33.407 9.36804 35.9614 10.2696 37.9407 11.6686C40.7127 13.622 41.8526 16.2696 41.8526 16.2696L36.4225 16.8085C36.4225 16.8085 33.6505 12.7359 28.2049 12.6582C17.3138 12.4924 15.9097 23.337 15.9097 23.337" fill="#292929"/><path d="M11.6301 26.14C11.485 22.3628 12.4125 19.0416 13.5265 16.5234C17.1586 8.30575 25.4902 6.65808 25.4902 6.65808C25.4902 6.65808 21.6145 7.0674 17.5679 9.0415C13.0187 11.2643 8.61976 15.798 7.57832 22.6892C7.43842 23.6271 7.34515 25.2696 7.41251 26.3059C7.66121 30.0054 8.89957 33.1349 10.7959 35.679C13.1897 38.8862 15.8322 40.7722 18.1482 41.9277C21.1171 43.4044 25.3244 43.8189 25.3244 43.8189C25.3244 43.8189 17.2363 42.0935 13.6923 34.3681C12.6975 32.1971 11.7493 29.2851 11.6301 26.1452" fill="#292929"/><path d="M221.716 32.052C222.566 35.907 225.436 37.8396 230.234 37.8396C234.405 37.8396 235.923 36.2075 235.923 34.4044C235.923 32.8551 235.12 31.6064 229.783 30.8448C221.307 29.6789 218.348 27.6582 218.348 23.6685C218.348 19.4095 222.472 16.5856 228.705 16.5856C233.944 16.5856 238.177 19.7152 239.617 24.166L235.477 25.1711C233.902 21.9224 231.187 20.4405 228.172 20.2955C224.819 20.1348 222.985 21.5235 223.104 23.5027C223.187 24.9017 224.146 26.28 230.146 27.0364C238.804 28.1297 240.41 31.8033 240.41 34.4095C240.41 37.3267 237.685 41.7049 230.234 41.7049C223.327 41.7049 218.213 38.2541 217.41 33.0054L221.716 32.0624V32.052Z" fill="#292929"/><path d="M210.583 32.5443C210.583 35.28 206.992 37.6583 202.961 37.6583C199.417 37.6583 197.847 36.6686 197.847 34.4717C197.847 32.4976 199.733 31.4199 204.573 30.5702C208.34 29.8966 209.91 29.2696 210.495 28.1919H210.583V32.5443ZM204.749 16.5804C201.744 16.5804 199.189 17.3421 197.127 18.824C195.283 20.1193 194.091 21.824 193.521 23.881L197.847 25.1712C198.697 22.2748 201.246 20.5287 204.79 20.5287C208.065 20.5287 210.215 21.8292 210.215 23.8499C210.215 25.4665 208.599 26.3162 203.759 27.0779C196.226 28.1971 193.309 30.3525 193.309 34.6116C193.309 38.8707 196.671 41.6946 202.096 41.6946C205.816 41.6946 209.091 40.3474 210.661 38.1505H210.749V41.021H215.101V24.8292C215.101 19.7618 211.065 16.5753 204.744 16.5753" fill="#292929"/><path d="M188.251 17.2539H191.929V21.2021H184.308C184.308 19.0208 186.074 17.2539 188.256 17.2539M184.302 21.197V34.7411C184.302 36.3525 184.883 36.8499 186.857 36.8499H190.805V41.0209H186.634C181.655 41.0209 179.681 39.1815 179.681 34.8343V11.6943H184.302V21.2021V21.197Z" fill="#292929"/><path d="M170.901 17.254H175.523V41.021H170.901V17.254ZM173.01 8.28504H173.233C174.57 8.28504 175.652 9.36796 175.652 10.7048C175.652 12.0415 174.57 13.1244 173.233 13.1244H173.01C171.673 13.1244 170.59 12.0415 170.59 10.7048C170.59 9.36796 171.673 8.28504 173.01 8.28504Z" fill="#292929"/><path d="M162.118 27.5235C162.118 23.7566 158.439 20.6634 153.864 20.6634C148.843 20.6634 145.48 24.0727 145.48 29.1401C145.48 34.2075 148.796 37.6168 154.045 37.6168C158.527 37.6168 162.118 34.5235 162.118 30.7567V27.5287V27.5235ZM153.418 16.5804C157.004 16.5804 160.102 17.7462 162.03 19.855H162.118V8.28504H166.734V41.0262H162.382V38.337H162.294C160.454 40.4925 157.268 41.6997 153.636 41.6997C146.237 41.6997 140.854 36.4096 140.854 29.1453C140.854 21.881 146.278 16.5856 153.413 16.5856" fill="#292929"/><path d="M125.731 20.456C129.855 20.456 133.353 23.3732 133.622 27.14H117.7C117.969 23.3732 121.285 20.456 125.726 20.456M133.011 34.5597C131.073 36.6893 128.689 37.767 125.866 37.767C123.534 37.767 121.606 37.0934 120.037 35.7929C118.467 34.4924 117.658 32.7877 117.617 30.6789H138.244V29.1089C138.244 21.9327 132.954 16.5545 125.684 16.5545C118.415 16.5545 112.995 21.7099 112.995 29.2022C112.995 36.6945 118.062 41.6686 125.866 41.6686C130.881 41.6686 134.731 39.7463 137.378 35.8603L133.016 34.5597H133.011Z" fill="#292929"/><path d="M111.391 16.5545C107.805 16.5545 105.085 17.7669 103.189 19.8705L103.178 19.5182V17.2332H98.8262V41.0002H103.448V27.9483C103.448 26.0934 103.764 25.2695 104.132 24.5493C105.375 22.1193 108.085 20.456 111.438 20.456C111.805 20.456 112.168 20.4819 112.52 20.5234L113.303 16.684C112.681 16.6011 112.044 16.5545 111.391 16.5545Z" fill="#292929"/><path d="M90.7156 31.1193C89.0731 35.166 85.5705 37.3214 81.0265 37.3214C74.4358 37.3214 69.6794 32.4354 69.6794 25.3006C69.6794 18.1659 74.4307 13.2798 81.0265 13.2798C85.7519 13.2798 89.327 15.4612 90.8865 19.3887L95.5394 17.9949C93.6171 12.4508 87.9487 8.93265 81.0265 8.93265C71.7416 8.79794 64.6587 16.0622 64.7934 25.3006C64.6587 34.539 71.7467 41.8033 81.0265 41.6686C87.8658 41.6686 93.2959 38.1763 95.3736 32.5079L90.7156 31.1193Z" fill="#292929"/></svg> `,
  hotmart: `<svg viewBox="0 0 980 285" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-auto"><path d="M254.819 228.71V89.9728C254.819 89.1745 255.445 88.5213 256.24 88.5213H284.426C285.221 88.5213 285.846 89.1745 285.846 89.9728V142.395C290.853 133.493 300.674 125.389 316.464 125.389C341.69 125.389 351.15 141.791 351.15 164.531V228.71C351.15 229.508 350.524 230.162 349.73 230.162H321.736C320.941 230.162 320.316 229.508 320.316 228.71V172.635C320.316 158.797 316.079 150.693 304.333 150.693C292.586 150.693 285.654 158.991 285.654 174.014V228.71C285.654 229.508 285.028 230.162 284.234 230.162H256.24C255.445 230.162 254.819 229.508 254.819 228.71Z" fill="#0D0D0D"/><path d="M360.972 179.963V177.98C360.972 147.136 381.769 125.388 413.181 125.388C444.593 125.388 465.39 147.136 465.39 177.98V179.963C465.39 211.001 444.786 232.749 413.181 232.749C381.576 232.749 360.972 211.001 360.972 179.963ZM434.171 179.963V177.98C434.171 159.401 427.816 149.506 413.181 149.506C398.546 149.506 392.191 159.401 392.191 177.98V179.963C392.191 198.736 398.739 208.63 413.181 208.63C427.623 208.63 434.171 198.736 434.171 179.963Z" fill="#0D0D0D"/><path d="M487.99 199.316V150.692H470.827C470.298 150.692 469.889 150.256 469.889 149.724V128.944C469.889 128.411 470.322 127.976 470.827 127.976H487.99V89.5117C487.99 88.9795 488.423 88.5441 488.929 88.5441H517.837C518.367 88.5441 518.776 88.9795 518.776 89.5117V127.976H540.873C541.403 127.976 541.812 128.411 541.812 128.944V149.724C541.812 150.256 541.378 150.692 540.873 150.692H518.776V197.139C518.776 205.243 522.627 208.606 532.256 208.606C536.3 208.606 538.225 207.856 540.969 206.985L542.197 207.904V229.386C542.197 229.822 541.908 230.209 541.499 230.33C536.492 231.781 531.004 232.7 524.746 232.7C499.52 232.7 487.966 221.234 487.966 199.292L487.99 199.316Z" fill="#0D0D0D"/><path d="M555.414 229.193V128.944C555.414 128.412 555.847 127.976 556.353 127.976H585.262C585.791 127.976 586.2 128.412 586.2 128.944V143.58C590.822 134.484 600.065 125.388 615.494 125.388C630.924 125.388 640.528 131.508 645.535 144.378C652.467 132.524 663.251 125.388 677.693 125.388C702.149 125.388 711.801 141.596 711.801 165.328V229.193C711.801 229.725 711.368 230.16 710.862 230.16H681.953C681.424 230.16 681.015 229.725 681.015 229.193V171.254C681.015 157.223 675.815 150.498 666.187 150.498C655.404 150.498 649.049 158.409 649.049 175.222V229.193C649.049 229.725 648.616 230.16 648.11 230.16H619.201C618.672 230.16 618.263 229.725 618.263 229.193V171.448C618.263 157.611 613.641 150.498 603.82 150.498C593.229 150.498 586.297 157.998 586.297 175.004V229.193C586.297 229.725 585.863 230.16 585.358 230.16H556.449C555.92 230.16 555.51 229.725 555.51 229.193H555.414Z" fill="#0D0D0D"/><path d="M722.537 201.687C722.537 184.1 733.513 173.625 752.577 171.23L787.263 166.489V159.957C787.263 152.458 782.449 147.91 772.436 147.91C762.422 147.91 757.054 151.78 755.971 158.965C755.899 159.449 755.49 159.788 755.032 159.788H727.64C727.086 159.788 726.629 159.304 726.677 158.723C728.362 137.628 746.319 125.388 773.037 125.388C799.756 125.388 817.327 138.814 817.327 160.175V229.169C817.327 229.701 816.894 230.136 816.389 230.136H789.333C788.828 230.136 788.418 229.725 788.394 229.241L787.48 214.944C781.51 226.024 770.341 232.725 755.321 232.725C736.065 232.725 722.585 219.686 722.585 201.687H722.537ZM787.263 193.002V185.697L763.77 188.866C756.068 189.858 752.409 193.607 752.409 199.728C752.409 206.453 757.223 210.396 766.081 210.396C777.635 210.396 787.263 203.477 787.263 193.002Z" fill="#0D0D0D"/><path d="M920.444 150.692H903.282C902.752 150.692 902.343 150.256 902.343 149.724V128.944C902.343 128.411 902.776 127.976 903.282 127.976H920.444V89.5117C920.444 88.9795 920.877 88.5441 921.383 88.5441H950.292C950.821 88.5441 951.23 88.9795 951.23 89.5117V127.976H975.325C975.855 127.976 976.264 128.411 976.264 128.944V149.724C976.264 150.256 975.83 150.692 975.325 150.692H951.23V197.139C951.23 205.243 955.082 208.606 964.71 208.606C968.802 208.606 972.292 207.832 975.469 206.961C976.071 206.791 976.673 207.251 976.673 207.904V229.41C976.673 229.846 976.384 230.233 975.975 230.354C970.8 231.805 963.482 232.725 957.2 232.725C931.974 232.725 920.42 221.258 920.42 199.316V150.667L920.444 150.692Z" fill="#0D0D0D"/><path d="M889.924 128.028C873.291 126.504 864.842 132.286 860.341 144.212V128.947C860.341 128.415 859.908 127.98 859.402 127.98H831.986C831.456 127.98 831.047 128.415 831.047 128.947V229.196C831.047 229.728 831.48 230.164 831.986 230.164H859.402C859.932 230.164 860.341 229.728 860.341 229.196V182.531C860.341 151.953 872.472 149.486 889.779 150.574C890.333 150.599 890.79 150.163 890.79 149.607V128.996C890.79 128.512 890.405 128.052 889.924 128.004V128.028Z" fill="#0D0D0D"/><path d="M199.866 133.954C196.256 121.132 191.033 108.625 183.547 96.2636C183.547 96.2636 176.494 84.5792 173.533 81.0472C172.811 80.128 171.343 81.144 171.896 82.1842C172.739 83.926 173.485 86.0548 172.955 88.1595C172.089 90.6996 169.249 92.4897 166.625 91.5705C165.927 91.2802 165.277 90.8689 164.699 90.2641C162.003 87.4821 160.631 82.91 158.874 77.0799C157.31 71.9029 155.384 65.4438 151.87 58.4767C146.189 47.1552 139.449 41.9056 139.184 41.6879C138.847 41.4218 138.366 41.4218 138.005 41.6879C137.644 41.954 137.499 42.3895 137.644 42.8249C137.668 42.9217 140.508 52.2595 135.044 59.3234C132.878 62.1538 129.556 63.8472 125.705 64.0891C121.829 64.331 118.002 63.0489 115.691 60.7507C109.987 55.0174 109.313 44.857 109.433 39.3172C109.794 20.835 115.378 7.89261 118.291 3.61074C118.556 3.24787 118.532 2.73985 118.243 2.37698C117.954 2.0383 117.497 1.89315 117.087 2.08668C94.4851 11.9084 78.1171 28.6488 69.7646 50.4936C65.0467 63.4843 63.0007 69.4112 61.3399 73.1367C59.7993 76.5477 58.3792 78.1201 56.9349 78.991C56.1406 79.4748 55.1537 79.7409 54.1668 79.7893C52.6985 79.6441 45.4051 78.2894 51.7597 66.097C52.2893 65.081 50.8932 64.0407 50.1229 64.8874L45.1162 70.4031C44.8996 70.645 44.6589 70.8869 44.4423 71.1288L43.5998 72.0481C43.4554 72.2174 43.335 72.3625 43.2147 72.5319C27.4243 90.5786 16.3759 113.657 10.0212 135.018C4.31648 155.557 3.95542 171.934 4.00357 178.176C4.00357 178.708 4.00357 179.167 4.00357 179.554C4.00357 207.157 14.4984 233.09 33.5864 252.612C52.6504 272.111 78.0208 282.876 104.98 282.876C131.939 282.876 157.31 272.135 176.374 252.612C195.437 233.09 205.956 207.157 205.956 179.554C205.956 161.967 203.694 147.646 199.866 133.954ZM104.98 233.041C76.1192 233.041 52.6985 209.092 52.6985 179.554C52.6985 150.017 76.0952 126.067 104.98 126.067C133.865 126.067 157.261 150.017 157.261 179.554C157.261 209.092 133.865 233.041 104.98 233.041Z" fill="#FF4000"/></svg> `,
};
const logos = ["itau", "bradesco", "neon", "dasa", "creditas", "hotmart"];

const tileGradients = [
  "radial-gradient(120% 120% at 20% 20%, #6d72c3 0%, transparent 50%), radial-gradient(120% 120% at 80% 80%, #370031 0%, transparent 60%), #0b0033",
  "radial-gradient(120% 120% at 80% 20%, #eaf27c 0%, transparent 45%), radial-gradient(120% 120% at 20% 80%, #6d72c3 0%, transparent 60%), #370031",
  "radial-gradient(120% 120% at 30% 70%, #e5d4ed 0%, transparent 45%), radial-gradient(120% 120% at 70% 20%, #370031 0%, transparent 60%), #0b0033",
  "radial-gradient(120% 120% at 70% 70%, #6d72c3 0%, transparent 55%), radial-gradient(120% 120% at 20% 20%, #0b0033 0%, transparent 60%), #370031",
  "radial-gradient(120% 120% at 50% 15%, #eaf27c 0%, transparent 40%), radial-gradient(120% 120% at 50% 95%, #6d72c3 0%, transparent 50%), #0b0033",
];

/* ------------------------------------------------------------------ */
/* State                                                               */
/* ------------------------------------------------------------------ */

let lang = "pt";
let cycleIndex = 0;
let cycleTimer = null;
let hoveredId = null;
const PROJECT_PASSWORD = "project123";
const unlockedIds = new Set();

/* ------------------------------------------------------------------ */
/* Reveal (IntersectionObserver) — re-arms on every re-entry           */
/* ------------------------------------------------------------------ */

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("is-visible", entry.isIntersecting);
  });
}, { threshold: 0.3 });

function observeReveals(root = document) {
  root.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));
}

/* ------------------------------------------------------------------ */
/* i18n + rendering                                                    */
/* ------------------------------------------------------------------ */

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[lang][key] !== undefined) el.textContent = dict[lang][key];
  });
  document.getElementById("btnLangPt").classList.toggle("font-semibold", lang === "pt");
  document.getElementById("btnLangPt").classList.toggle("text-[var(--ink)]", lang === "pt");
  document.getElementById("btnLangPt").classList.toggle("text-[var(--muted)]", lang !== "pt");
  document.getElementById("btnLangEn").classList.toggle("font-semibold", lang === "en");
  document.getElementById("btnLangEn").classList.toggle("text-[var(--ink)]", lang === "en");
  document.getElementById("btnLangEn").classList.toggle("text-[var(--muted)]", lang !== "en");
}

function renderLogos() {
  const el = document.getElementById("logosMarquee");
  const doubled = [...logos, ...logos];
  el.innerHTML = doubled
    .map((key) => `<span class="h-6 md:h-8 flex items-center shrink-0 opacity-70 hover:opacity-100 transition-opacity">${logoSVGs[key]}</span>`)
    .join("");
}

function renderProjectsGrid() {
  const el = document.getElementById("projectsGrid");
  const visible = projects.filter((p) => !p.hidden);
  const spanClass = visible.length === 1 ? "col-span-2 row-span-3" : "";
  el.innerHTML = visible
    .map((p, i) => `
      <div class="group relative h-full rounded-xl md:rounded-2xl overflow-hidden md:cursor-none ${spanClass}"
           data-reveal style="--ry:24px; --rd:${((i % 2) * 0.08).toFixed(2)}s; min-height:454px; width:max((100vw - 200px) / 2, 200px); ${p.thumb ? "" : `background:${tileGradients[i % tileGradients.length]}`}"
           data-project-tile="${p.id}" role="button" tabindex="0">
        ${p.thumb ? `<img src="${p.thumb}" alt="${p.title[lang]}" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />` : ""}

        <div class="absolute top-0 left-0 right-0 p-3 md:p-6 bg-gradient-to-b from-black/60 via-black/10 to-transparent z-20">
          <p class="font-mono text-white text-[13px] md:text-lg font-medium leading-snug">${p.title[lang]}</p>
          <p class="font-mono text-white/70 text-[10px] md:text-[11px] mt-0.5">${p.company}</p>
        </div>

        ${p.gated ? `
          <div class="absolute inset-0 backdrop-blur-md bg-black/30 flex flex-col items-center justify-center gap-1.5 z-10">
            <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
              <i data-lucide="lock" class="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--paper)]"></i>
            </div>
            <span class="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-white/90 bg-black/30 px-2 py-0.5 rounded">${dict[lang].locked_label}</span>
          </div>` : ""}

        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div class="absolute bottom-0 left-0 right-0 p-3 md:p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p class="font-mono text-white text-[13px] md:text-xl font-medium leading-snug">${p.title[lang]}</p>
          <p class="font-mono text-white/60 text-[10px] md:text-[11px] mt-0.5 md:mt-1">${p.company} · ${p.year}</p>
        </div>

        <span class="absolute top-2 right-2 md:top-4 md:right-4 font-mono text-[10px] md:text-[11px] text-white/50 z-20">${String(i + 1).padStart(2, "0")}</span>
      </div>
    `)
    .join("");

  lucide.createIcons();
  observeReveals(el);

  el.querySelectorAll("[data-project-tile]").forEach((tile) => {
    const id = tile.getAttribute("data-project-tile");
    tile.addEventListener("mouseenter", () => { hoveredId = id; updateCursor(); });
    tile.addEventListener("mouseleave", () => { hoveredId = null; updateCursor(); });
    tile.addEventListener("click", () => openProjectPage(id));
    tile.addEventListener("keydown", (e) => { if (e.key === "Enter") openProjectPage(id); });
  });
}

function updateCursor() {
  const follower = document.getElementById("cursorFollower");
  const p = projects.find((x) => x.id === hoveredId);
  if (!p) { follower.style.opacity = 0; return; }
  follower.style.opacity = 1;
  document.getElementById("cursorPill").textContent = p.gated ? dict[lang].locked_label : dict[lang].cursor_label;
  document.getElementById("cursorIcon").setAttribute("data-lucide", p.gated ? "lock" : "folder-open");
  lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.getElementById("projectsWrap");
  wrap.addEventListener("mousemove", (e) => {
    const follower = document.getElementById("cursorFollower");
    follower.style.left = e.clientX + "px";
    follower.style.top = e.clientY + "px";
  });
});

/* ------------------------------------------------------------------ */
/* Hero word-cycle rotator                                             */
/* ------------------------------------------------------------------ */

function startCycle() {
  clearInterval(cycleTimer);
  cycleIndex = 0;
  const el = document.getElementById("cycleWord");
  el.textContent = dict[lang].hero_cycle_words[0];
  cycleTimer = setInterval(() => {
    const words = dict[lang].hero_cycle_words;
    cycleIndex = (cycleIndex + 1) % words.length;
    el.textContent = words[cycleIndex];
    el.classList.remove("animate-wordIn");
    void el.offsetWidth; // force reflow to restart the CSS animation
    el.classList.add("animate-wordIn");
  }, 2200);
}

/* ------------------------------------------------------------------ */
/* Project quick-view modal                                            */
/* ------------------------------------------------------------------ */

function renderGate() {
  return `
    <form id="gateForm" class="min-h-screen flex flex-col items-center justify-center text-center gap-4 px-6">
      <div class="w-10 h-10 rounded-full bg-[var(--tint)] flex items-center justify-center">
        <i data-lucide="lock" class="w-4 h-4 text-[var(--accent)]"></i>
      </div>
      <div>
        <h3 class="text-lg font-medium mb-1">${dict[lang].gate_title}</h3>
        <p class="text-[13px] text-[var(--muted)] max-w-xs">${dict[lang].gate_subtitle}</p>
      </div>
      <input id="gatePassword" type="password" placeholder="${dict[lang].gate_placeholder}" autofocus
        class="w-full max-w-[220px] border border-[var(--hairline)] rounded-lg px-3 py-2 text-sm font-mono text-center focus:outline-none focus:border-[var(--accent)]" />
      <p id="gateError" class="text-[12px] text-[#e5605a] font-mono hidden">${dict[lang].gate_error}</p>
      <button type="submit" class="bg-[var(--ink)] text-[var(--paper)] font-mono text-[12px] px-5 py-2 rounded-full hover:bg-[var(--accent)] hover:text-white transition-colors">${dict[lang].gate_submit}</button>
    </form>
  `;
}

function renderMetaGrid(p) {
  const rows = p.cs
    ? p.cs.meta
    : [
        { l: { pt: "Ano", en: "Year" }, v: { pt: p.year, en: p.year } },
        { l: { pt: "Indústria", en: "Industry" }, v: p.industry },
        { l: { pt: "Serviço", en: "Service" }, v: p.service },
        { l: { pt: "Solução", en: "Solution" }, v: p.solution },
      ];
  return `
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-8 border-t border-[var(--hairline)]">
      ${rows
        .map(
          (r) => `
        <div>
          <p class="font-mono text-[14px] uppercase tracking-widest text-[var(--muted)] mb-1">${r.l[lang]}</p>
          <p class="text-[16px]">${r.v[lang]}</p>
        </div>`
        )
        .join("")}
    </div>
  `;
}

function renderRelatedProjects(p) {
  const others = projects.filter((x) => x.id !== p.id && !x.hidden).slice(0, 2);
  if (others.length === 0) return "";
  return `
    <div class="border-t border-[var(--hairline)] px-6 md:px-10 py-16 md:py-24">
      <div class="max-w-5xl mx-auto">
        <p class="font-mono text-[11px] uppercase tracking-widest text-[var(--accent)] mb-8" data-reveal>${dict[lang].more_projects}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          ${others
            .map(
              (o, i) => `
            <div data-related-project="${o.id}" data-reveal class="group relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer"
                 style="${o.thumb ? "" : `background:${tileGradients[(projects.findIndex((x) => x.id === o.id)) % tileGradients.length]}`}">
              ${o.thumb ? `<img src="${o.thumb}" alt="${o.title[lang]}" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />` : ""}
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/0"></div>
              <div class="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <p class="font-mono text-white text-lg md:text-xl font-medium">${o.title[lang]}</p>
                <p class="font-mono text-white/60 text-[11px] mt-1">${o.company} · ${o.year}</p>
              </div>
            </div>`
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderProjectCTA() {
  return `
    <div class="bg-[var(--ink)] text-[var(--paper)] px-6 md:px-10 py-16 md:py-24">
      <div data-reveal class="max-w-5xl mx-auto">
        <p class="font-mono text-[11px] uppercase tracking-widest text-black/50 mb-4">${dict[lang].contact_kicker}</p>
        <h3 class="font-mono font-semibold text-3xl md:text-5xl leading-[0.95] mb-4">${dict[lang].project_cta_title}</h3>
        <p class="text-black/60 mb-8 max-w-md">${dict[lang].project_cta_sub}</p>
        <div class="flex flex-wrap gap-4">
          <a href="mailto:tha.b@live.hk" class="inline-flex items-center gap-2 bg-[var(--pop)] text-[var(--paper)] font-mono text-[13px] px-5 py-3 rounded-full hover:opacity-90 transition-opacity">
            <i data-lucide="mail" class="w-[14px] h-[14px]"></i> tha.b@live.hk
          </a>
          <a href="https://www.linkedin.com/in/thaisbarbosa/" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 border border-black/30 text-black font-mono text-[13px] px-5 py-3 rounded-full hover:bg-black/10 transition-colors">
            <i data-lucide="linkedin" class="w-[14px] h-[14px]"></i> /in/thaisbarbosa
          </a>
        </div>
      </div>
    </div>
  `;
}

function csSection(s) {
  const BREAKOUT = 'style="width:100vw;margin-left:calc(50% - 50vw);"';

  if (s.isImage) {
    if (s.src) {
      const idx = CASE_IMAGES.indexOf(s.src);
      const zoomAttrs = s.zoomable ? `data-zoom-src="${s.src}"` : `data-lightbox-idx="${idx}"`;
      const zoomCursor = s.zoomable ? "cursor-zoom-in" : "cursor-pointer";
      if (s.centered) {
        return `
          <div data-reveal class="mb-10 pb-10 border-b border-[var(--hairline)] last:border-b-0 last:mb-0 last:pb-0 text-center">
            <img src="${s.src}" alt="${s.caption ? s.caption[lang] : (lang === "pt" ? "Captura de tela do projeto" : "Project screenshot")}" loading="lazy" class="inline-block object-cover ${zoomCursor} rounded-[10px] max-w-full" style="${s.width ? `width:${s.width}px;` : ""}" ${zoomAttrs} />
            ${s.caption ? `<p class="italic text-[16px] text-[var(--muted)] mt-3">${s.caption[lang]}</p>` : ""}
          </div>
        `;
      }
      return `
        <div data-reveal class="mb-10 pb-10 border-b border-[var(--hairline)] last:border-b-0 last:mb-0 last:pb-0">
          <div ${BREAKOUT}>
            <img src="${s.src}" alt="${s.caption ? s.caption[lang] : (lang === "pt" ? "Captura de tela do projeto" : "Project screenshot")}" loading="lazy" class="w-full object-cover ${zoomCursor}" ${zoomAttrs} />
          </div>
          ${s.caption ? `<p class="italic text-[16px] text-[var(--muted)] mt-3">${s.caption[lang]}</p>` : ""}
        </div>
      `;
    }
    return `
      <div data-reveal class="mb-10 pb-10 border-b border-[var(--hairline)] last:border-b-0 last:mb-0 last:pb-0">
        <div class="w-full aspect-[16/9] rounded-xl bg-[var(--tint)] border border-[var(--hairline)] flex items-center justify-center">
          <span class="font-mono text-[14px] uppercase tracking-widest text-[var(--muted)]">Imagem</span>
        </div>
      </div>
    `;
  }

  if (s.isGallery) {
    const [img1, img2, img3] = s.images;
    const [i1, i2, i3] = s.images.map((im) => CASE_IMAGES.indexOf(im));
    return `
      <div data-reveal class="mb-10 pb-10 border-b border-[var(--hairline)] last:border-b-0 last:mb-0 last:pb-0">
        <div ${BREAKOUT}>
          <div class="grid grid-cols-1 gap-3">
            <img src="${img1}" alt="${lang === "pt" ? "Captura de tela do projeto — imagem 1" : "Project screenshot — image 1"}" loading="lazy" class="w-full object-cover cursor-pointer" data-lightbox-idx="${i1}" />
            <div class="grid grid-cols-2 gap-3">
              <img src="${img2}" alt="${lang === "pt" ? "Captura de tela do projeto — imagem 2" : "Project screenshot — image 2"}" loading="lazy" class="w-full object-cover cursor-pointer" data-lightbox-idx="${i2}" />
              <img src="${img3}" alt="${lang === "pt" ? "Captura de tela do projeto — imagem 3" : "Project screenshot — image 3"}" loading="lazy" class="w-full object-cover cursor-pointer" data-lightbox-idx="${i3}" />
            </div>
          </div>
        </div>
        ${s.caption ? `<p class="italic text-[16px] text-[var(--muted)] mt-3">${s.caption[lang]}</p>` : ""}
      </div>
    `;
  }

  if (s.isSlider) {
    return `
      <div data-reveal class="mb-10 pb-10 border-b border-[var(--hairline)] last:border-b-0 last:mb-0 last:pb-0">
        <p class="font-mono text-[14px] uppercase tracking-widest text-[var(--muted)] mb-3">${lang === "pt" ? "Antes e depois" : "Before and after"}</p>
        <div ${BREAKOUT}>
          <div class="flex gap-3 overflow-x-auto pb-2 px-6 md:px-10" style="scroll-snap-type:x mandatory;">
            ${s.images
              .map(
                (img, idx) => {
                  const label = idx === 0
                    ? (lang === "pt" ? "Antes" : "Before")
                    : idx === s.images.length - 1
                      ? (lang === "pt" ? "Depois" : "After")
                      : (lang === "pt" ? `Antes e depois — imagem ${idx + 1}` : `Before and after — image ${idx + 1}`);
                  return `
              <img src="${img}" alt="${label}" loading="lazy" class="w-[85%] md:w-[60%] shrink-0 rounded-xl object-cover cursor-pointer" data-lightbox-idx="${CASE_IMAGES.indexOf(img)}" style="scroll-snap-align:center" />`;
                }
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  if (s.isVideo) {
    const videoAttrs = s.loop ? "autoplay loop muted playsinline" : "controls playsinline muted";
    if (s.centered) {
      return `
        <div data-reveal class="mb-10 pb-10 border-b border-[var(--hairline)] last:border-b-0 last:mb-0 last:pb-0 text-center">
          <video class="inline-block object-cover rounded-[10px] max-w-full" src="${s.src}" style="${s.width ? `width:${s.width}px;` : ""}" ${videoAttrs}></video>
          ${s.caption ? `<p class="italic text-[16px] text-[var(--muted)] mt-3">${s.caption[lang]}</p>` : ""}
        </div>
      `;
    }
    return `
      <div data-reveal class="mb-10 pb-10 border-b border-[var(--hairline)] last:border-b-0 last:mb-0 last:pb-0">
        <div ${BREAKOUT}>
          <video class="w-full object-cover" src="${s.src}" ${videoAttrs}></video>
        </div>
        ${s.caption ? `<p class="italic text-[16px] text-[var(--muted)] mt-3">${s.caption[lang]}</p>` : ""}
      </div>
    `;
  }

  if (s.isCanvas) {
    return `
      <div data-reveal class="mb-10 pb-10 border-b border-[var(--hairline)] last:border-b-0 last:mb-0 last:pb-0">
        <div class="relative w-full rounded-[10px] overflow-hidden border border-[var(--hairline)] bg-[var(--tint)]" style="height:640px;" data-canvas-viewer>
          <div class="absolute inset-0 cursor-grab" data-canvas-stage style="touch-action:none;">
            <img src="${s.src}" alt="${s.caption ? s.caption[lang] : (lang === "pt" ? "Captura de tela do projeto" : "Project screenshot")}" class="absolute top-0 left-0 select-none pointer-events-none" draggable="false" data-canvas-img style="width:${s.width || 2400}px;transform-origin:0 0;" />
          </div>
          <p class="absolute top-3 left-3 font-mono text-[11px] uppercase tracking-widest text-[var(--muted)] bg-[var(--bg)]/80 px-2 py-1 rounded z-10 pointer-events-none">${lang === "pt" ? "Arraste para navegar · role para dar zoom" : "Drag to pan · scroll to zoom"}</p>
          <div class="absolute bottom-3 right-3 flex gap-2 z-10">
            <button type="button" data-canvas-zoom-out class="w-8 h-8 rounded-full bg-[var(--ink)] text-[var(--bg)] flex items-center justify-center text-[18px] leading-none">−</button>
            <button type="button" data-canvas-zoom-reset class="px-3 h-8 rounded-full bg-[var(--ink)] text-[var(--bg)] flex items-center justify-center text-[12px] font-mono uppercase">${lang === "pt" ? "Ajustar" : "Fit"}</button>
            <button type="button" data-canvas-zoom-in class="w-8 h-8 rounded-full bg-[var(--ink)] text-[var(--bg)] flex items-center justify-center text-[18px] leading-none">+</button>
          </div>
        </div>
        ${s.caption ? `<p class="italic text-[16px] text-[var(--muted)] mt-3">${s.caption[lang]}</p>` : ""}
      </div>
    `;
  }

  let extra = "";

  if (s.quote) {
    extra += `
      <blockquote class="border-l-2 border-[var(--accent)] pl-4 my-4 text-[16px] text-[var(--ink)] italic">
        ${s.quote[lang]}
        <footer class="not-italic font-mono text-[14px] text-[var(--muted)] mt-1">${s.cite[lang]}</footer>
      </blockquote>`;
  }

  if (s.goal && s.rows) {
    extra += `
      <p class="font-mono text-[14px] text-[var(--accent)] mb-4">${s.goal[lang]}</p>
      <div class="space-y-3">
        ${s.rows
          .map(
            (r) => `
          <div class="grid grid-cols-2 gap-3 text-[16px] border border-[var(--hairline)] rounded-lg p-3">
            <div><p class="text-[14px] font-mono uppercase text-[var(--muted)] mb-1">${lang === "pt" ? "Causa" : "Cause"}</p><p>${r.problem[lang]}</p></div>
            <div><p class="text-[14px] font-mono uppercase text-[var(--muted)] mb-1">${lang === "pt" ? "Tese" : "Thesis"}</p><p>${r.thesis[lang]}</p></div>
          </div>`
          )
          .join("")}
      </div>`;
  }

  if (s.findings) {
    extra += `
      <div class="grid grid-cols-1 gap-3 mb-4">
        ${s.findings
          .map(
            (f) => `
          <div class="border border-[var(--hairline)] rounded-lg p-3">
            <p class="text-[16px] font-medium mb-1">${f.title[lang]}</p>
            <p class="text-[16px] text-[var(--muted)] mb-2">${f.desc[lang]}</p>
            <span class="font-mono text-[14px] uppercase tracking-widest text-[var(--accent)]">${f.verdict[lang]}</span>
          </div>`
          )
          .join("")}
      </div>
      <p class="text-[16px] text-[var(--muted)] italic">${s.signal[lang]}</p>`;
  }

  if (s.stats) {
    extra += `
      <div class="grid grid-cols-2 gap-4 mb-[24px]">
        ${s.stats
          .map(
            (st) => `
          <div>
            <p class="font-mono text-[24px] md:text-[32px] font-semibold text-[var(--accent)]">${st.v}</p>
            <p class="text-[14px] text-[var(--muted)] mt-1">${st.l[lang]}</p>
          </div>`
          )
          .join("")}
      </div>`;
  }

  if (s.items) {
    extra += `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        ${s.items
          .map(
            (it) => `
          <div class="border border-[var(--hairline)] rounded-lg p-3">
            <p class="text-[16px] font-medium mb-1">${it.title[lang]}</p>
            <p class="text-[16px] text-[var(--muted)]">${it.desc[lang]}</p>
          </div>`
          )
          .join("")}
      </div>
      <p class="font-mono text-[16px] bg-[var(--tint)] rounded-lg p-3">${s.case[lang]}</p>`;
  }

  if (s.table) {
    extra += `
      <div class="border border-[var(--hairline)] rounded-lg overflow-hidden mb-6 text-[16px]">
        <div class="grid grid-cols-3 bg-[var(--tint)] font-mono text-[14px] uppercase tracking-widest text-[var(--muted)]">
          ${s.table.head[lang].map((h) => `<div class="p-2">${h}</div>`).join("")}
        </div>
        ${s.table.rows
          .map(
            (r) => `
          <div class="grid grid-cols-3 border-t border-[var(--hairline)]">
            <div class="p-2">${r[0][lang]}</div>
            <div class="p-2 font-mono">${r[1]}</div>
            <div class="p-2 font-mono text-[var(--accent)]">${r[2]}</div>
          </div>`
          )
          .join("")}
      </div>
      <div class="grid grid-cols-1 gap-3 mb-6">
        ${s.learnings
          .map(
            (l) => `
          <div>
            <p class="text-[16px] font-medium mb-1">${l.title[lang]}</p>
            <p class="text-[16px] text-[var(--muted)]">${l.desc[lang]}</p>
          </div>`
          )
          .join("")}
      </div>
      <div class="bg-[var(--ink)] text-[var(--paper)] rounded-lg p-5">
        <p class="font-mono text-[24px] font-semibold mb-2">${s.closing.headline[lang]}</p>
        <p class="italic text-[16px] text-black/70 mb-2">${s.closing.quote[lang]}</p>
        <p class="text-[16px] text-black/60">${s.closing.text[lang]}</p>
      </div>`;
  }

  return `
    <div data-reveal class="mb-10 pb-10 border-b border-[var(--hairline)] last:border-b-0 last:mb-0 last:pb-0">
      <p class="font-mono text-[14px] text-[var(--accent)] mb-2">${s.num}</p>
      <h3 class="text-[18px] md:text-[24px] font-medium mb-3">${s.title[lang]}</h3>
      ${s.body[lang].map((p) => `<p class="text-[16px] text-[var(--muted)] leading-relaxed mb-3">${p}</p>`).join("")}
      ${extra}
    </div>
  `;
}

function renderProjectHeader(p) {
  const eyebrow = p.cs ? p.cs.eyebrow[lang] : `${p.company} · ${p.year}`;
  const title = p.cs ? p.cs.title[lang] : p.title[lang];
  const subtitle = p.cs ? p.cs.subtitle[lang] : p.desc[lang];
  return `
    <div class="px-6 md:px-10 pt-24 md:pt-28">
      <div data-reveal class="max-w-5xl mx-auto">
        <p class="font-mono text-[14px] uppercase tracking-widest text-[var(--accent)] mb-4">${eyebrow}</p>
        <h1 class="font-mono font-semibold leading-[0.92] tracking-tight text-[36px] md:text-[56px] mb-6">${title}</h1>
        <p class="text-[var(--muted)] text-[20px] md:text-[32px] max-w-2xl mb-2">${subtitle}</p>
        ${renderMetaGrid(p)}
      </div>
    </div>
  `;
}

function renderProjectCover(p, index) {
  if (p.coverImage) {
    return `
      <div class="w-full h-[70vh] md:h-screen overflow-hidden mb-10 md:mb-16">
        <img class="w-full h-full object-cover" src="${p.coverImage}" alt="${p.title[lang]}" />
      </div>
    `;
  }
  if (p.coverVideo) {
    return `
      <div class="w-full h-[70vh] md:h-screen overflow-hidden mb-10 md:mb-16">
        <video class="w-full h-full object-cover" src="${p.coverVideo}" autoplay loop muted playsinline></video>
      </div>
    `;
  }
  return `
    <div class="px-6 md:px-10 pb-10 md:pb-16">
      <div class="max-w-5xl mx-auto">
        <div class="w-full aspect-[16/8] md:aspect-[16/7] rounded-2xl overflow-hidden" style="background:${tileGradients[index % tileGradients.length]}"></div>
      </div>
    </div>
  `;
}

function renderProjectBody(p) {
  if (p.cs) {
    return `<div class="px-6 md:px-10 pb-16 md:pb-24"><div class="max-w-3xl mx-auto">${p.cs.sections.map(csSection).join("")}</div></div>`;
  }
  return `
    <div class="px-6 md:px-10 pb-16 md:pb-24">
      <div data-reveal class="max-w-2xl mx-auto">
      ${p.isProtected ? `
        <div class="flex items-center gap-2 mb-6 font-mono text-[11px] uppercase tracking-widest text-[var(--accent)]">
          <i data-lucide="lock" class="w-[13px] h-[13px]"></i>
          <span>${dict[lang].locked_label} · ${dict[lang].locked_hint}</span>
        </div>` : ""}
      <p class="text-[15px] text-[var(--muted)] leading-relaxed">${p.desc[lang]}</p>
      </div>
    </div>
  `;
}

function renderProjectPage(p) {
  const idx = projects.findIndex((x) => x.id === p.id);
  return `
    ${renderProjectHeader(p)}
    ${renderProjectCover(p, idx)}
    ${renderProjectBody(p)}
    ${renderRelatedProjects(p)}
    ${renderProjectCTA()}
  `;
}

let currentProjectPageId = null;
let activeCanvasDrag = null;

function playCoverVideo() {
  const vid = document.querySelector("#projectPageBody video");
  if (vid) {
    vid.muted = true;
    const p = vid.play();
    if (p && p.catch) p.catch(() => {});
  }
}

function openProjectPage(id) {
  const p = projects.find((x) => x.id === id);
  if (!p) return;
  currentProjectPageId = id;

  const needsGate = p.gated && !unlockedIds.has(p.id);
  const body = document.getElementById("projectPageBody");
  body.innerHTML = needsGate ? renderGate() : renderProjectPage(p);
  lucide.createIcons();
  playCoverVideo();
  observeReveals(body);

  if (needsGate) {
    document.getElementById("gateForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const val = document.getElementById("gatePassword").value;
      if (val === PROJECT_PASSWORD) {
        unlockedIds.add(p.id);
        body.innerHTML = renderProjectPage(p);
        lucide.createIcons();
        wireRelatedProjectClicks();
        wireLightboxClicks();
        wireCanvasViewers(body);
        wireZoomClicks();
        observeReveals(body);
        playCoverVideo();
      } else {
        document.getElementById("gateError").classList.remove("hidden");
      }
    });
  } else {
    wireRelatedProjectClicks();
    wireLightboxClicks();
    wireCanvasViewers(body);
    wireZoomClicks();
  }

  const page = document.getElementById("projectPage");
  page.classList.remove("hidden");
  page.scrollTop = 0;
  document.body.style.overflow = "hidden";
}

function wireRelatedProjectClicks() {
  document.querySelectorAll("[data-related-project]").forEach((card) => {
    card.addEventListener("click", () => openProjectPage(card.getAttribute("data-related-project")));
  });
}

let lightboxIndex = null;
let lightboxImages = CASE_IMAGES;
let lightboxGroup = "case";
const lightboxAlts = {};

function openLightbox(idx, images, group) {
  const list = images || CASE_IMAGES;
  if (idx == null || idx < 0 || idx >= list.length) return;
  lightboxImages = list;
  lightboxIndex = idx;
  lightboxGroup = group || "case";
  const imgEl = document.getElementById("lightboxImg");
  imgEl.src = lightboxImages[lightboxIndex];
  imgEl.alt = lightboxAlts[lightboxGroup + ":" + lightboxIndex] || "";
  const lb = document.getElementById("lightbox");
  lb.classList.remove("hidden");
  lb.classList.add("flex");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.add("hidden");
  document.getElementById("lightbox").classList.remove("flex");
  lightboxIndex = null;
}

function lightboxStep(dir) {
  if (lightboxIndex == null) return;
  lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  const imgEl = document.getElementById("lightboxImg");
  imgEl.src = lightboxImages[lightboxIndex];
  imgEl.alt = lightboxAlts[lightboxGroup + ":" + lightboxIndex] || "";
}

function wireLightboxClicks(root = document) {
  root.querySelectorAll("[data-lightbox-idx]").forEach((img) => {
    const group = img.getAttribute("data-lightbox-group") || "case";
    const idx = Number(img.getAttribute("data-lightbox-idx"));
    lightboxAlts[group + ":" + idx] = img.alt || "";
    if (img.dataset.lightboxWired) return;
    img.dataset.lightboxWired = "1";
    img.addEventListener("click", () => {
      const images = group === "about" ? ABOUT_GALLERY_IMAGES : CASE_IMAGES;
      openLightbox(idx, images, group);
    });
  });
}

/* ------------------------------------------------------------------ */
/* Zoom lightbox — fullscreen pan/zoom viewer for high-definition       */
/* images (opened by clicking a "zoomable" image)                      */
/* ------------------------------------------------------------------ */

function openZoomLightbox(src, alt) {
  const overlay = document.getElementById("zoomLightbox");
  const viewer = overlay.querySelector("[data-canvas-viewer]");
  const img = document.getElementById("zoomLightboxImg");
  overlay.classList.remove("hidden");
  overlay.classList.add("flex");
  wireCanvasViewers(overlay);
  const doFit = () => fitCanvasViewer(viewer);
  img.onload = doFit;
  img.src = src;
  img.alt = alt || "";
  requestAnimationFrame(doFit);
}

function closeZoomLightbox() {
  const overlay = document.getElementById("zoomLightbox");
  overlay.classList.add("hidden");
  overlay.classList.remove("flex");
}

function isZoomLightboxOpen() {
  return !document.getElementById("zoomLightbox").classList.contains("hidden");
}

function wireZoomClicks() {
  document.querySelectorAll("[data-zoom-src]").forEach((img) => {
    img.addEventListener("click", () => openZoomLightbox(img.getAttribute("data-zoom-src"), img.alt));
  });
}

document.getElementById("zoomLightboxClose").addEventListener("click", closeZoomLightbox);
document.getElementById("zoomLightbox").addEventListener("click", (e) => {
  if (e.target.id === "zoomLightbox") closeZoomLightbox();
});

/* ------------------------------------------------------------------ */
/* Pan/zoom "canvas" viewer (Figma-like navigation for image blocks)   */
/* ------------------------------------------------------------------ */

function fitCanvasViewer(viewer) {
  const img = viewer.querySelector("[data-canvas-img]");
  if (!img || !img.naturalWidth || !img.naturalHeight) return;
  const rect = viewer.getBoundingClientRect();
  const coverScale = Math.max(rect.width / img.naturalWidth, rect.height / img.naturalHeight);
  const scale = coverScale * 1.5;
  const x = (rect.width - img.naturalWidth * scale) / 2;
  const y = (rect.height - img.naturalHeight * scale) / 2;
  viewer._canvasState = { scale, x, y, minScale: coverScale, maxScale: coverScale * 6 };
  applyCanvasTransform(viewer);
}

function applyCanvasTransform(viewer) {
  const img = viewer.querySelector("[data-canvas-img]");
  const st = viewer._canvasState;
  if (!img || !st) return;
  img.style.transform = `translate(${st.x}px, ${st.y}px) scale(${st.scale})`;
}

function zoomCanvasViewer(viewer, factor, clientX, clientY) {
  const st = viewer._canvasState;
  if (!st) return;
  const rect = viewer.getBoundingClientRect();
  const cx = clientX != null ? clientX - rect.left : rect.width / 2;
  const cy = clientY != null ? clientY - rect.top : rect.height / 2;
  const newScale = Math.min(Math.max(st.scale * factor, st.minScale), st.maxScale);
  const ratio = newScale / st.scale;
  st.x = cx - (cx - st.x) * ratio;
  st.y = cy - (cy - st.y) * ratio;
  st.scale = newScale;
  applyCanvasTransform(viewer);
}

function wireCanvasViewers(container) {
  container.querySelectorAll("[data-canvas-viewer]").forEach((viewer) => {
    if (viewer.dataset.canvasWired) return;
    viewer.dataset.canvasWired = "1";

    const img = viewer.querySelector("[data-canvas-img]");
    const stage = viewer.querySelector("[data-canvas-stage]");
    const initFit = () => fitCanvasViewer(viewer);
    if (img.complete && img.naturalWidth) initFit();
    else img.addEventListener("load", initFit, { once: true });

    let touchPinch = null;

    viewer.addEventListener("mousedown", (e) => {
      if (e.target.closest("button") || !viewer._canvasState) return;
      e.preventDefault();
      activeCanvasDrag = { viewer, startX: e.clientX, startY: e.clientY, origX: viewer._canvasState.x, origY: viewer._canvasState.y };
      stage.classList.add("cursor-grabbing");
    });

    viewer.addEventListener(
      "wheel",
      (e) => {
        if (!viewer._canvasState) return;
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
        zoomCanvasViewer(viewer, factor, e.clientX, e.clientY);
      },
      { passive: false }
    );

    viewer.querySelector("[data-canvas-zoom-in]").addEventListener("click", () => zoomCanvasViewer(viewer, 1.25));
    viewer.querySelector("[data-canvas-zoom-out]").addEventListener("click", () => zoomCanvasViewer(viewer, 1 / 1.25));
    viewer.querySelector("[data-canvas-zoom-reset]").addEventListener("click", () => fitCanvasViewer(viewer));

    viewer.addEventListener(
      "touchstart",
      (e) => {
        if (!viewer._canvasState) return;
        if (e.touches.length === 1) {
          const t = e.touches[0];
          activeCanvasDrag = { viewer, startX: t.clientX, startY: t.clientY, origX: viewer._canvasState.x, origY: viewer._canvasState.y };
        } else if (e.touches.length === 2) {
          activeCanvasDrag = null;
          const [t1, t2] = e.touches;
          touchPinch = { dist: Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY) };
        }
      },
      { passive: true }
    );

    viewer.addEventListener(
      "touchmove",
      (e) => {
        if (!viewer._canvasState) return;
        if (e.touches.length === 2 && touchPinch) {
          e.preventDefault();
          const [t1, t2] = e.touches;
          const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
          const midX = (t1.clientX + t2.clientX) / 2;
          const midY = (t1.clientY + t2.clientY) / 2;
          zoomCanvasViewer(viewer, dist / touchPinch.dist, midX, midY);
          touchPinch.dist = dist;
        } else if (e.touches.length === 1 && activeCanvasDrag && activeCanvasDrag.viewer === viewer) {
          e.preventDefault();
          const t = e.touches[0];
          const st = viewer._canvasState;
          st.x = activeCanvasDrag.origX + (t.clientX - activeCanvasDrag.startX);
          st.y = activeCanvasDrag.origY + (t.clientY - activeCanvasDrag.startY);
          applyCanvasTransform(viewer);
        }
      },
      { passive: false }
    );

    viewer.addEventListener("touchend", () => {
      activeCanvasDrag = null;
      touchPinch = null;
    });
  });
}

window.addEventListener("mousemove", (e) => {
  if (!activeCanvasDrag) return;
  const { viewer, startX, startY, origX, origY } = activeCanvasDrag;
  const st = viewer._canvasState;
  if (!st) return;
  st.x = origX + (e.clientX - startX);
  st.y = origY + (e.clientY - startY);
  applyCanvasTransform(viewer);
});

window.addEventListener("mouseup", () => {
  if (!activeCanvasDrag) return;
  const stage = activeCanvasDrag.viewer.querySelector("[data-canvas-stage]");
  if (stage) stage.classList.remove("cursor-grabbing");
  activeCanvasDrag = null;
});

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", () => lightboxStep(-1));
document.getElementById("lightboxNext").addEventListener("click", () => lightboxStep(1));
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") closeLightbox();
});

function closeProjectPage() {
  document.getElementById("projectPage").classList.add("hidden");
  document.body.style.overflow = "";
  currentProjectPageId = null;
}

document.getElementById("btnProjectBack").addEventListener("click", closeProjectPage);
window.addEventListener("keydown", (e) => {
  if (isZoomLightboxOpen()) {
    if (e.key === "Escape") closeZoomLightbox();
    return;
  }
  if (lightboxIndex !== null) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lightboxStep(-1);
    if (e.key === "ArrowRight") lightboxStep(1);
    return;
  }
  if (e.key === "Escape" && currentProjectPageId) closeProjectPage();
});

/* ------------------------------------------------------------------ */
/* Sticky-stack depth effect + gentle inertia scroll (desktop)         */
/* ------------------------------------------------------------------ */

const app = document.getElementById("app");
const stackSections = Array.from(document.querySelectorAll(".stack-section"));
const finePointer = window.matchMedia("(pointer: fine)").matches;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const useInertia = finePointer && !reduceMotion;

let currentY = app.scrollTop;
let targetY = app.scrollTop;

function clampScroll(y) {
  return Math.min(Math.max(y, 0), app.scrollHeight - app.clientHeight);
}

function updateStack() {
  const vh = window.innerHeight;
  stackSections.forEach((sec, i) => {
    const next = stackSections[i + 1];
    const inner = sec.querySelector(".stack-inner");
    if (!next) {
      inner.style.transform = "";
      inner.style.opacity = 1;
      return;
    }
    const nextTop = next.getBoundingClientRect().top;
    const progress = Math.min(Math.max((vh - nextTop) / vh, 0), 1);
    inner.style.transform = `scale(${1 - 0.06 * progress})`;
    inner.style.opacity = 1 - 0.35 * progress;
  });
}

if (useInertia) {
  app.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      targetY = clampScroll(targetY + e.deltaY);
    },
    { passive: false }
  );

  (function raf() {
    currentY += (targetY - currentY) * 0.09;
    if (Math.abs(targetY - currentY) < 0.4) currentY = targetY;
    app.scrollTop = currentY;
    updateStack();
    requestAnimationFrame(raf);
  })();
} else {
  app.addEventListener(
    "scroll",
    () => requestAnimationFrame(updateStack),
    { passive: true }
  );
}

window.addEventListener("resize", updateStack);

/* ------------------------------------------------------------------ */
/* Nav + language switch                                               */
/* ------------------------------------------------------------------ */

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (useInertia) {
    targetY = clampScroll(el.offsetTop);
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

document.getElementById("btnHome").addEventListener("click", () => scrollToSection("hero"));
document.getElementById("btnAbout").addEventListener("click", () => scrollToSection("about"));
document.getElementById("btnProjects").addEventListener("click", () => scrollToSection("projects"));
document.getElementById("btnContact").addEventListener("click", () => scrollToSection("contact"));
document.getElementById("btnHeroCta").addEventListener("click", () => scrollToSection("projects"));
document.getElementById("btnScrollDown").addEventListener("click", () => scrollToSection("projects"));

document.getElementById("btnLangPt").addEventListener("click", () => setLang("pt"));
document.getElementById("btnLangEn").addEventListener("click", () => setLang("en"));

function setLang(next) {
  lang = next;
  applyI18n();
  renderProjectsGrid();
  startCycle();
}

/* ------------------------------------------------------------------ */
/* Init                                                                 */
/* ------------------------------------------------------------------ */

document.getElementById("footerYear").textContent = "© " + new Date().getFullYear() + " Thaís Santos";

applyI18n();
renderLogos();
renderProjectsGrid();
startCycle();
observeReveals();
wireLightboxClicks();
updateStack();
lucide.createIcons();