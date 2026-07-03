import { useState, useRef } from "react";

const DIAGNOSTIC_DATA = {
  intro: {
    title: "SIGNAL",
    subtitle: "Diagnostic d'Alignement Identitaire",
    hook: "Ce que tu es vraiment attend que tu l'entendes.",
    description: `Ce que tu vas traverser dans les prochaines minutes n'est pas un test.

C'est un miroir.

Pas le miroir poli que le monde t'a appris à regarder — celui qui renvoie l'image acceptable, fonctionnelle, correcte.

L'autre. Celui qu'on évite.

Chaque question ici a été conçue pour atteindre ce que tu sais déjà mais que tu n'as pas encore autorisé à exister pleinement.

Il n'y a pas de bonnes réponses. Il y a les tiennes.

Réponds avec ce qui est vrai — pas avec ce qui est beau.`
  },
  sections: [
    {
      id: "clarte",
      number: "01",
      title: "La clarté intérieure",
      subtitle: "Ce que tu sais — et ce que tu fais semblant de ne pas savoir",
      accent: "#C8A96E",
      items: [
        {
          type: "mirror",
          text: "Tu sais exactement ce que tu devrais faire. Le problème, c'est que tu ne le fais pas. Et tu as une très bonne explication pour ça.",
          scale: ["Totalement moi", "Plutôt moi", "Un peu moi", "Pas vraiment moi"]
        },
        {
          type: "projective",
          text: "Quand tu t'allonges la nuit et que le silence arrive — quelle est la pensée que tu repousses en premier ?",
          options: [
            "\"Est-ce que ma vie correspond vraiment à ce que je veux ?\"",
            "\"Je perds du temps sur ce qui ne compte pas vraiment.\"",
            "\"Je pourrais faire tellement plus — mais quelque chose me retient.\"",
            "\"Je ne suis pas sûr(e) de savoir qui je suis vraiment.\""
          ]
        },
        {
          type: "mirror",
          text: "Il y a une version de toi qui serait plus libre, plus alignée, plus entière. Tu la perçois. Mais tu ne sais pas très bien comment l'atteindre — ou tu as peur de ce que ça coûterait.",
          scale: ["Totalement moi", "Plutôt moi", "Un peu moi", "Pas vraiment moi"]
        },
        {
          type: "situation",
          text: "Quand quelqu'un te demande \"tu vas bien ?\" tu réponds :",
          options: [
            "\"Oui, ça va\" — et c'est vrai en surface, mais pas en profondeur.",
            "\"Oui\" — parce que la vraie réponse prendrait trop longtemps.",
            "\"Oui\" — parce que tu n'as pas les mots pour dire autre chose.",
            "Tu réponds vraiment, et c'est rare que les gens soient prêts à l'entendre."
          ]
        }
      ]
    },
    {
      id: "identite",
      number: "02",
      title: "L'identité réelle",
      subtitle: "Qui tu es quand personne ne regarde",
      accent: "#9B7FA6",
      items: [
        {
          type: "mirror",
          text: "Il y a ce que tu montres au monde — compétent, stable, fiable — et il y a ce que tu vis à l'intérieur, qui ressemble parfois à l'exact opposé. Et personne ne sait vraiment.",
          scale: ["Totalement moi", "Plutôt moi", "Un peu moi", "Pas vraiment moi"]
        },
        {
          type: "identity",
          text: "Laquelle de ces phrases décrit le mieux ta relation à toi-même ?",
          options: [
            "Je m'adapte si bien aux autres que parfois je ne sais plus ce que je veux vraiment.",
            "Je sais qui je suis, mais je n'arrive pas à l'exprimer sans perdre quelque chose.",
            "J'ai l'impression d'avoir plusieurs versions de moi qui ne se parlent pas.",
            "Je performe une version de moi que j'ai construite pour survivre — pas pour vivre."
          ]
        },
        {
          type: "projective",
          text: "Si tu pouvais effacer une seule chose que les autres pensent de toi pour qu'ils voient qui tu es vraiment, ce serait :",
          options: [
            "Que je suis fort(e) — alors qu'à l'intérieur, je doute.",
            "Que je gère tout — alors que je suis épuisé(e) de gérer.",
            "Que je suis satisfait(e) — alors que je cherche encore.",
            "Que je n'ai besoin de personne — alors que je veux être vraiment vu(e)."
          ]
        },
        {
          type: "mirror",
          text: "Tu as appris très tôt qu'être trop toi-même avait un coût. Alors tu as trouvé la bonne dose — assez pour être authentique, pas trop pour être rejeté(e).",
          scale: ["Totalement moi", "Plutôt moi", "Un peu moi", "Pas vraiment moi"]
        },
        {
          type: "situation",
          text: "Dans un groupe, face à une décision importante, tu :",
          options: [
            "Dis ce que tu penses — mais tu surveilles la réaction avant d'aller plus loin.",
            "Attends de voir où le vent souffle avant de te positionner.",
            "Prends souvent la position qui minimise le conflit.",
            "Exprimes pleinement ce que tu penses, quitte à déranger."
          ]
        }
      ]
    },
    {
      id: "blocages",
      number: "03",
      title: "Les blocages invisibles",
      subtitle: "Ce qui te retient sans que tu l'aies choisi",
      accent: "#7A9E9F",
      items: [
        {
          type: "mirror",
          text: "Il t'arrive de saboter quelque chose de bien — une opportunité, une relation, un élan — sans comprendre vraiment pourquoi. Comme si une partie de toi refusait d'arriver.",
          scale: ["Totalement moi", "Plutôt moi", "Un peu moi", "Pas vraiment moi"]
        },
        {
          type: "identity",
          text: "Ton auto-sabotage principal ressemble à quoi ?",
          options: [
            "La procrastination sur ce qui compte vraiment — et l'efficacité sur ce qui ne compte pas.",
            "Je me lance, puis je ralentis juste avant d'arriver.",
            "Je cherche encore et encore — mais je ne décide jamais vraiment.",
            "Je réussis, puis je trouve inconsciemment un moyen de tout compliquer."
          ]
        },
        {
          type: "projective",
          text: "Si quelqu'un te regardait vivre cette semaine, il dirait que la chose qui t'empêche d'avancer est :",
          options: [
            "Le temps — mais tu sais que ce n'est pas vraiment ça.",
            "Les autres — mais tu sais que tu as ta part là-dedans.",
            "L'argent — mais tu sais que c'est un symptôme, pas la cause.",
            "Toi-même — et c'est la vérité que tu évites."
          ]
        },
        {
          type: "mirror",
          text: "Tu as une relation ambivalente avec le succès. Une partie de toi le veut profondément. Une autre a peur de ce qu'il changera — ou de ce qu'il révèlera.",
          scale: ["Totalement moi", "Plutôt moi", "Un peu moi", "Pas vraiment moi"]
        }
      ]
    },
    {
      id: "energie",
      number: "04",
      title: "L'énergie et la vérité",
      subtitle: "Ce qui te nourrit — et ce qui te vide sans que tu le nommes",
      accent: "#E07A5F",
      items: [
        {
          type: "mirror",
          text: "Tu as des journées où tu es pleinement là — présent(e), vivant(e), juste. Et d'autres où tu traverses ta propre vie comme un spectateur. La différence entre les deux, tu la connais. Tu ne l'écoutes pas toujours.",
          scale: ["Totalement moi", "Plutôt moi", "Un peu moi", "Pas vraiment moi"]
        },
        {
          type: "situation",
          text: "Qu'est-ce qui te vide le plus profondément ?",
          options: [
            "Faire des choses qui ont du sens pour les autres, pas pour moi.",
            "Être présent(e) physiquement quelque part où je ne suis pas intérieurement.",
            "Parler sans être vraiment entendu(e).",
            "Performer une version de moi qui n'est pas tout à fait moi."
          ]
        },
        {
          type: "projective",
          text: "Ta motivation profonde — pas celle que tu affiches, la vraie — ressemble plutôt à :",
          options: [
            "Prouver quelque chose à quelqu'un qui doute encore de moi.",
            "Trouver un endroit où je n'ai pas besoin de me justifier d'exister.",
            "Construire quelque chose qui me ressemble vraiment.",
            "Être enfin en paix avec qui je suis — pas avec qui je devrais être."
          ]
        },
        {
          type: "mirror",
          text: "Il y a quelque chose que tu fais et qui te réveille de l'intérieur — pas parce que c'est rentable ou approuvé, mais parce que ça, c'est toi. Tu ne lui accordes peut-être pas assez de place.",
          scale: ["Totalement moi", "Plutôt moi", "Un peu moi", "Pas vraiment moi"]
        }
      ]
    },
    {
      id: "peurs",
      number: "05",
      title: "Les peurs profondes",
      subtitle: "Ce que tu protèges — et ce que ça te coûte",
      accent: "#8A8FBD",
      items: [
        {
          type: "mirror",
          text: "Ta plus grande peur n'est probablement pas l'échec. C'est peut-être de réussir et de découvrir que ça ne suffit pas. Ou de changer et de ne plus reconnaître les personnes autour de toi.",
          scale: ["Totalement moi", "Plutôt moi", "Un peu moi", "Pas vraiment moi"]
        },
        {
          type: "identity",
          text: "Quelle est ta peur la plus honnête en ce moment ?",
          options: [
            "D'avoir déjà raté quelque chose d'irréversible.",
            "De ne jamais vraiment savoir qui je suis.",
            "De réussir — et d'être seul(e) dans cette réussite.",
            "De changer tellement que je perdrai ce que j'ai construit."
          ]
        },
        {
          type: "projective",
          text: "Ton mécanisme de protection principal ressemble à :",
          options: [
            "L'hyperactivité — si je fais assez, je n'ai pas à ressentir.",
            "Le contrôle — si je maîtrise tout, rien ne peut me surprendre.",
            "Le retrait — si je ne m'expose pas, je ne peux pas être blessé(e).",
            "L'excellence — si je suis parfait(e), personne ne verra mes failles."
          ]
        },
        {
          type: "mirror",
          text: "Il y a quelqu'un en toi qui a décidé très tôt qu'il valait mieux être utile, fort(e), ou invisible plutôt que d'être pleinement soi. Cette décision t'a protégé(e). Elle te coûte encore.",
          scale: ["Totalement moi", "Plutôt moi", "Un peu moi", "Pas vraiment moi"]
        },
        {
          type: "situation",
          text: "Face à une opportunité qui t'attire profondément mais qui te demande de sortir de ta zone :",
          options: [
            "Je trouve des raisons objectives de ne pas y aller.",
            "Je dis oui — et puis je trouve des obstacles.",
            "J'y vais — mais je minimise l'importance pour ne pas trop espérer.",
            "J'analyse indéfiniment sans jamais vraiment décider."
          ]
        }
      ]
    },
    {
      id: "bascule",
      number: "06",
      title: "Le désir réel",
      subtitle: "Ce qui attend — de l'autre côté de ce que tu te permets",
      accent: "#C8A96E",
      items: [
        {
          type: "mirror",
          text: "Il y a une version de ta vie que tu n'as pas encore autorisée à exister complètement. Pas parce qu'elle est impossible. Parce qu'une partie de toi ne se juge pas encore méritante de l'habiter.",
          scale: ["Totalement moi", "Plutôt moi", "Un peu moi", "Pas vraiment moi"]
        },
        {
          type: "projective",
          text: "Ce que tu veux vraiment — pas ce que tu devrais vouloir — ressemble à :",
          options: [
            "Être exactement qui je suis, sans avoir à m'expliquer ou me justifier.",
            "Avoir un impact réel — quelque chose qui porte ma signature profonde.",
            "Vivre sans cette tension constante entre ce que je fais et ce que je suis.",
            "Trouver l'endroit où ma singularité est une force, pas un problème."
          ]
        },
        {
          type: "identity",
          text: "Si tu pouvais changer une seule chose aujourd'hui, ce serait :",
          options: [
            "Arrêter de me demander si je suis assez.",
            "Avoir le courage d'exprimer ce que je vis vraiment.",
            "Comprendre pourquoi je me sabote quand ça commence à bien aller.",
            "Enfin agir depuis qui je suis vraiment — pas depuis ce qu'on attend de moi."
          ]
        },
        {
          type: "mirror",
          text: "Le point de bascule n'est pas une décision. C'est un moment où tu arrêtes de négocier avec toi-même. Tu n'es pas encore là. Mais tu n'es plus loin.",
          scale: ["Totalement moi", "Plutôt moi", "Un peu moi", "Pas vraiment moi"]
        }
      ]
    }
  ],
  profiles: [
    {
      id: "performant",
      name: "Le Performant Désaligné",
      icon: "◈",
      color: "#C8A96E",
      tagline: "Tu réussis — et quelque chose en toi sait que ce n'est pas ça.",
      description: "En surface, tu fonctionnes. Tu produis, tu livres, tu tiens. Le monde voit quelqu'un de compétent, fiable, qui a sa vie en main. Mais derrière cette efficacité, il y a une fatigue que tu n'arrives pas tout à fait à nommer. Ce n'est pas l'épuisement du manque — c'est l'épuisement du trop. Trop de rôles. Trop d'adaptations. Trop de performance au service d'une identité qui n'est pas tout à fait la tienne.",
      mechanism: "Ton mécanisme central est la compensation par l'excellence. Si tu fais assez, si tu réussis assez, la question de qui tu es vraiment n'a pas besoin de se poser. L'action devient une anesthésie sophistiquée.",
      consequence: "Si rien ne change : la réussite continue, mais le vide aussi. Un jour, quelque chose — une crise, un deuil, un moment de silence imposé — fait tomber le masque. Et là, tu ne sais plus qui est derrière.",
      opening: "Ce que tu cherches n'est pas plus de performance. C'est la permission d'être pleinement toi dans ce que tu construis — d'aligner ce que tu fais avec ce que tu es, profondément."
    },
    {
      id: "chercheur",
      name: "Le Chercheur Bloqué",
      icon: "◎",
      color: "#9B7FA6",
      tagline: "Tu cherches depuis longtemps. La réponse est peut-être là où tu ne veux pas regarder.",
      description: "Tu t'intéresses à ton fonctionnement. Tu as lu, exploré, suivi des formations. Tu te connais bien — en théorie. Mais entre la compréhension intellectuelle et la transformation réelle, il y a un fossé que tu n'arrives pas à franchir. Tu analyses avec précision ce qui te bloque. Tu connais les mécanismes. Et pourtant, tu es encore là, à chercher.",
      mechanism: "Ton mécanisme est l'intellectualisation comme protection. Comprendre devient un substitut à ressentir. La réflexion devient un espace sûr où tu n'as pas à prendre le risque de vraiment changer. Chaque nouvelle insight retarde l'engagement.",
      consequence: "Si rien ne change : tu continues d'accumuler du savoir sur toi-même sans l'incarner. La connaissance devient une collection — précieuse mais stérile. Et quelque part, la frustration monte d'être si conscient et si peu transformé.",
      opening: "Ce dont tu as besoin n'est pas plus d'information. C'est un espace où la compréhension devient action — où quelqu'un tient le cadre pour que tu ne puisses plus te réfugier dans la pensée."
    },
    {
      id: "adapte",
      name: "L'Adapté Épuisé",
      icon: "◐",
      color: "#7A9E9F",
      tagline: "Tu t'es tellement adapté aux autres que tu ne sais plus où tu commences.",
      description: "Tu es excellent(e) avec les gens. Tu lis l'atmosphère, tu t'ajustes, tu suis. Dans les relations, tu es la personne sur qui on peut compter. Ce talent d'adaptation t'a servi — il t'a permis de traverser des situations difficiles, de maintenir des liens, d'éviter les conflits. Mais il a un prix invisible : tu t'es perdu(e) dans la traduction de toi-même pour les autres.",
      mechanism: "Ton mécanisme est la fusion relationnelle comme sécurité. Être apprécié, validé, utile — c'est devenu une façon de justifier ta place. L'identité s'est construite en miroir des attentes des autres, non depuis ton propre centre.",
      consequence: "Si rien ne change : l'épuisement s'approfondit. Il devient de plus en plus difficile de savoir ce que tu veux, ce que tu ressens, ce qui est vraiment toi. La question \"qui suis-je quand je ne suis pas utile à quelqu'un ?\" commence à faire peur.",
      opening: "Ce que tu cherches, c'est retrouver ton centre — un endroit stable en toi d'où agir, choisir, exister, sans avoir besoin de validation extérieure pour te sentir légitime."
    },
    {
      id: "seuil",
      name: "L'Être de Seuil",
      icon: "◑",
      color: "#E07A5F",
      tagline: "Tu es exactement entre deux versions de toi. Et ce moment est crucial.",
      description: "Il se passe quelque chose. Tu le sens. Une ancienne version de toi est devenue trop petite — tu ne t'y reconnais plus vraiment. Et la nouvelle n'est pas encore là. Tu es dans l'entre-deux, cet espace inconfortable où l'ancien n'est plus juste et où le nouveau n'est pas encore formé. C'est vertigineux. C'est aussi le signe que tu es en mouvement réel.",
      mechanism: "Ton mécanisme est la résistance au vide intermédiaire. L'inconfort de ne pas savoir crée une tentation de revenir à ce qui était connu — même si c'était étouffant. Ou de te précipiter vers une certitude externe pour combler l'incertitude interne.",
      consequence: "Si rien ne change : tu oscilles. Un pas en avant, un pas en arrière. La transformation reste en suspens — ni vraiment lancée, ni vraiment abandonnée. L'énergie se consume dans l'hésitation.",
      opening: "Ce dont tu as besoin maintenant, c'est d'un accompagnement qui tient ce seuil avec toi — qui ne te pousse pas, ne te retient pas, mais qui éclaire le chemin pour que le passage soit conscient, pas subi."
    }
  ]
};

const SCALE_VALUES = {
  "Totalement moi": 3,
  "Plutôt moi": 2,
  "Un peu moi": 1,
  "Pas vraiment moi": 0
};

export default function App() {
  const [phase, setPhase] = useState("intro");
  const [currentSection, setCurrentSection] = useState(0);
  const [currentItem, setCurrentItem] = useState(0);
  const [answers, setAnswers] = useState({});
  const [profile, setProfile] = useState(null);
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef(null);

  const totalSections = DIAGNOSTIC_DATA.sections.length;
  const section = DIAGNOSTIC_DATA.sections[currentSection];
  const item = section?.items[currentItem];

  const totalItems = DIAGNOSTIC_DATA.sections.reduce((acc, s) => acc + s.items.length, 0);
  const answeredItems = Object.keys(answers).length;
  const progress = totalItems > 0 ? (answeredItems / totalItems) * 100 : 0;

  const computeProfile = (currentAnswers) => {
    const scores = { performant: 0, chercheur: 0, adapte: 0, seuil: 0 };
    Object.entries(currentAnswers).forEach(([key, val]) => {
      const parts = key.split("_");
      const secId = parts[0];
      const itemIdx = parseInt(parts[1]);
      const ansIdx = parts[2];
      const sec = DIAGNOSTIC_DATA.sections.find(s => s.id === secId);
      if (!sec) return;
      const itm = sec.items[itemIdx];
      if (!itm) return;
      if (itm.type === "mirror") {
        const v = SCALE_VALUES[val] || 0;
        if (secId === "clarte" || secId === "energie") scores.seuil += v;
        if (secId === "identite") scores.adapte += v;
        if (secId === "blocages") scores.chercheur += v;
        if (secId === "peurs") scores.performant += v;
      } else {
        const idx = parseInt(ansIdx);
        if (secId === "clarte") { if (idx === 2) scores.chercheur += 2; if (idx === 3) scores.adapte += 2; }
        if (secId === "identite") { if (idx === 0) scores.adapte += 3; if (idx === 3) scores.performant += 3; if (idx === 2) scores.chercheur += 2; }
        if (secId === "blocages") { if (idx === 2) scores.chercheur += 3; if (idx === 0) scores.performant += 2; if (idx === 3) scores.seuil += 2; }
        if (secId === "energie") { if (idx === 2) scores.chercheur += 2; if (idx === 3) scores.seuil += 3; }
        if (secId === "peurs") { if (idx === 0) scores.performant += 3; if (idx === 1) scores.chercheur += 3; if (idx === 2) scores.adapte += 3; if (idx === 3) scores.seuil += 3; }
        if (secId === "bascule") { if (idx === 0) scores.adapte += 2; if (idx === 1) scores.performant += 2; if (idx === 2) scores.chercheur += 2; if (idx === 3) scores.seuil += 3; }
      }
    });
    const top = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    return DIAGNOSTIC_DATA.profiles.find(p => p.id === top);
  };

  const handleAnswer = (answerKey) => {
    if (animating) return;
    const key = `${section.id}_${currentItem}_${answerKey}`;
    const newAnswers = { ...answers, [key]: answerKey };
    setAnswers(newAnswers);
    setAnimating(true);
    setTimeout(() => {
      const nextItem = currentItem + 1;
      if (nextItem < section.items.length) {
        setCurrentItem(nextItem);
      } else {
        const nextSection = currentSection + 1;
        if (nextSection < totalSections) {
          setCurrentSection(nextSection);
          setCurrentItem(0);
        } else {
          const p = computeProfile(newAnswers);
          setProfile(p);
          setPhase("result");
        }
      }
      setAnimating(false);
      if (containerRef.current) containerRef.current.scrollTop = 0;
      window.scrollTo(0, 0);
    }, 300);
  };

  const startDiagnostic = () => {
    setAnimating(true);
    setTimeout(() => { setPhase("diagnostic"); setAnimating(false); }, 400);
  };

  const restart = () => {
    setPhase("intro");
    setCurrentSection(0);
    setCurrentItem(0);
    setAnswers({});
    setProfile(null);
  };

  return (
    <div ref={containerRef} style={{
      minHeight: "100vh",
      background: "#0A0908",
      color: "#E8E0D5",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      position: "relative",
      overflowX: "hidden"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Josefin+Sans:wght@100;300;400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0A0908; }

        .fade-in { animation: fadeIn 0.6s ease forwards; }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards; }
        .fade-out { opacity: 0; transition: opacity 0.3s ease; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }

        .answer-btn {
          background: transparent;
          border: 1px solid rgba(232,224,213,0.12);
          color: #E8E0D5;
          padding: 20px 24px;
          text-align: left;
          cursor: pointer;
          transition: border-color 0.3s ease, background 0.3s ease;
          font-family: 'Georgia', serif;
          font-size: 15px;
          line-height: 1.6;
          border-radius: 2px;
          width: 100%;
          display: block;
        }
        .answer-btn:hover {
          border-color: rgba(232,224,213,0.35);
          background: rgba(232,224,213,0.03);
        }

        .scale-btn {
          background: transparent;
          border: 1px solid rgba(232,224,213,0.12);
          color: #E8E0D5;
          padding: 14px 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 2px;
          flex: 1;
          min-width: 0;
        }
        .scale-btn:hover {
          border-color: rgba(232,224,213,0.4);
          background: rgba(232,224,213,0.04);
        }

        .progress-bar {
          position: fixed; top: 0; left: 0; right: 0; height: 1px; z-index: 100;
          background: rgba(232,224,213,0.06);
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #C8A96E, #9B7FA6);
          transition: width 0.6s ease;
        }

        .cta-primary {
          background: transparent;
          border: 1px solid rgba(200,169,110,0.5);
          color: #C8A96E;
          padding: 18px 40px;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cta-primary:hover {
          background: rgba(200,169,110,0.08);
          border-color: rgba(200,169,110,0.8);
        }

        .cta-result {
          padding: 18px 40px;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          border: none;
          transition: all 0.3s ease;
        }
        .cta-secondary {
          background: transparent;
          border: 1px solid rgba(232,224,213,0.15);
          color: rgba(232,224,213,0.4);
          padding: 18px 40px;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cta-secondary:hover { border-color: rgba(232,224,213,0.3); color: rgba(232,224,213,0.7); }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(200,169,110,0.2); }

        @media (max-width: 600px) {
          .scale-row { flex-direction: column !important; }
          .scale-btn { min-width: 100% !important; }
          .cta-row { flex-direction: column !important; align-items: stretch !important; }
        }
      `}</style>

      {/* Ambient bg */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: `
          radial-gradient(ellipse 80% 50% at 20% 20%, rgba(200,169,110,0.04) 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 80% 80%, rgba(155,127,166,0.03) 0%, transparent 60%)
        `
      }} />

      {/* Progress bar */}
      {phase === "diagnostic" && (
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      )}

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ═══════════ INTRO ═══════════ */}
        {phase === "intro" && (
          <div className="fade-in" style={{ maxWidth: 680, margin: "0 auto", padding: "80px 32px 80px" }}>

            <div style={{ marginBottom: 72, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{
                width: 30, height: 30, border: "1px solid rgba(200,169,110,0.4)", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center", color: "#C8A96E", fontSize: 13
              }}>◈</div>
              <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 10, letterSpacing: "0.4em", color: "rgba(232,224,213,0.35)", textTransform: "uppercase" }}>
                Signal — Diagnostic Identitaire
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(56px, 10vw, 96px)",
              fontWeight: 300, lineHeight: 0.88, margin: "0 0 24px",
              letterSpacing: "-0.02em", color: "#E8E0D5"
            }}>
              {DIAGNOSTIC_DATA.intro.title}
            </h1>

            <p style={{
              fontFamily: "'Josefin Sans', sans-serif", fontSize: 11,
              letterSpacing: "0.25em", color: "#C8A96E", textTransform: "uppercase", margin: "0 0 40px"
            }}>
              {DIAGNOSTIC_DATA.intro.subtitle}
            </p>

            <div style={{ width: 48, height: 1, background: "rgba(200,169,110,0.3)", margin: "0 0 40px" }} />

            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontStyle: "italic",
              fontWeight: 300, color: "rgba(232,224,213,0.7)", marginBottom: 48, lineHeight: 1.5
            }}>
              {DIAGNOSTIC_DATA.intro.hook}
            </p>

            <div style={{ marginBottom: 56 }}>
              {DIAGNOSTIC_DATA.intro.description.split('\n\n').map((para, i) => (
                <p key={i} style={{
                  fontFamily: "'Georgia', serif", fontSize: 16, lineHeight: 1.9,
                  color: i === 0 ? "#E8E0D5" : "rgba(232,224,213,0.6)",
                  marginBottom: 18
                }}>{para}</p>
              ))}
            </div>

            <div style={{ display: "flex", gap: 40, marginBottom: 56, paddingTop: 32, borderTop: "1px solid rgba(232,224,213,0.06)" }}>
              {[["6", "Dimensions"], ["24", "Questions"], ["15 min", "Durée"]].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 300, color: "#C8A96E" }}>{val}</div>
                  <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 9, letterSpacing: "0.2em", color: "rgba(232,224,213,0.3)", textTransform: "uppercase", marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>

            <button className="cta-primary" onClick={startDiagnostic}>
              Commencer l'expérience &nbsp;→
            </button>

            <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 9, letterSpacing: "0.15em", color: "rgba(232,224,213,0.18)", textTransform: "uppercase", marginTop: 24 }}>
              Confidentiel — Aucune donnée transmise
            </p>
          </div>
        )}

        {/* ═══════════ DIAGNOSTIC ═══════════ */}
        {phase === "diagnostic" && section && item && (
          <div className={animating ? "fade-out" : "fade-up"} style={{ maxWidth: 680, margin: "0 auto", padding: "56px 32px 80px" }}>

            <div style={{ marginBottom: 52 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 10, letterSpacing: "0.3em", color: "rgba(232,224,213,0.3)", textTransform: "uppercase" }}>
                  {section.number}
                </span>
                <div style={{ flex: 1, height: 1, background: "rgba(232,224,213,0.06)" }} />
                <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 9, letterSpacing: "0.2em", color: "rgba(232,224,213,0.2)", textTransform: "uppercase" }}>
                  {currentSection + 1} / {totalSections}
                </span>
              </div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px, 5vw, 46px)",
                fontWeight: 300, margin: "0 0 8px", letterSpacing: "-0.01em", color: "#E8E0D5"
              }}>
                {section.title}
              </h2>
              <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 10, letterSpacing: "0.12em", color: section.accent, opacity: 0.8, textTransform: "uppercase" }}>
                {section.subtitle}
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: section.accent, opacity: 0.7 }} />
              <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 9, letterSpacing: "0.2em", color: "rgba(232,224,213,0.2)", textTransform: "uppercase" }}>
                {item.type === "mirror" ? "Miroir" : item.type === "projective" ? "Projectif" : item.type === "situation" ? "Situation" : "Identité"}
              </span>
            </div>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: item.type === "mirror" ? 22 : 20,
              fontWeight: 300, lineHeight: 1.75,
              color: "#E8E0D5",
              fontStyle: item.type === "mirror" ? "italic" : "normal",
              marginBottom: 36,
              borderLeft: item.type === "mirror" ? `2px solid ${section.accent}` : "none",
              paddingLeft: item.type === "mirror" ? 24 : 0,
              opacity: item.type === "mirror" ? 0.9 : 1
            }}>
              {item.text}
            </p>

            {item.type === "mirror" ? (
              <div className="scale-row" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {item.scale.map((label) => (
                  <button key={label} className="scale-btn" onClick={() => handleAnswer(label)} style={{ minWidth: "calc(50% - 4px)" }}>
                    {label}
                  </button>
                ))}
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {item.options.map((opt, idx) => (
                  <button key={idx} className="answer-btn" onClick={() => handleAnswer(idx.toString())}>
                    <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 9, letterSpacing: "0.2em", color: section.accent, opacity: 0.6, marginRight: 14 }}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {opt}
                  </button>
                ))}
              </div>
            )}

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 48, paddingTop: 24, borderTop: "1px solid rgba(232,224,213,0.04)" }}>
              {DIAGNOSTIC_DATA.sections.map((s, i) => (
                <div key={i} style={{
                  width: i === currentSection ? 20 : 6, height: 2,
                  background: i === currentSection ? section.accent : "rgba(232,224,213,0.1)",
                  borderRadius: 1, transition: "all 0.4s ease"
                }} />
              ))}
              <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 9, letterSpacing: "0.2em", color: "rgba(232,224,213,0.2)", textTransform: "uppercase", marginLeft: "auto" }}>
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        )}

        {/* ═══════════ RESULT ═══════════ */}
        {phase === "result" && profile && (
          <div className="fade-in" style={{ maxWidth: 720, margin: "0 auto", padding: "60px 32px 100px" }}>

            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 9, letterSpacing: "0.4em", color: "rgba(232,224,213,0.3)", textTransform: "uppercase", marginBottom: 36 }}>
                Diagnostic complété
              </p>
              <div style={{ fontSize: 52, marginBottom: 20, color: profile.color, animation: "pulse 3s ease infinite" }}>{profile.icon}</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px, 6vw, 54px)", fontWeight: 300, margin: "0 0 16px", color: "#E8E0D5" }}>
                {profile.name}
              </h2>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontStyle: "italic", fontWeight: 300, color: profile.color, opacity: 0.9 }}>
                {profile.tagline}
              </p>
            </div>

            <div style={{ width: 48, height: 1, background: `${profile.color}40`, margin: "0 auto 52px" }} />

            {[
              { label: "Ce que le monde voit", content: profile.description },
              { label: "Le mécanisme invisible", content: profile.mechanism },
              { label: "Si rien ne change", content: profile.consequence }
            ].map(({ label, content }, i) => (
              <div key={i} style={{ marginBottom: 36, paddingBottom: 36, borderBottom: "1px solid rgba(232,224,213,0.05)" }}>
                <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 9, letterSpacing: "0.25em", color: profile.color, textTransform: "uppercase", opacity: 0.7, marginBottom: 14 }}>
                  {label}
                </p>
                <p style={{ fontFamily: "'Georgia', serif", fontSize: 16, lineHeight: 1.9, color: i === 2 ? "rgba(232,224,213,0.55)" : "rgba(232,224,213,0.8)" }}>
                  {content}
                </p>
              </div>
            ))}

            <div style={{ border: `1px solid ${profile.color}30`, padding: "32px 36px", marginBottom: 52, position: "relative" }}>
              <div style={{ position: "absolute", top: -1, left: 36, width: 40, height: 1, background: profile.color }} />
              <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 9, letterSpacing: "0.25em", color: profile.color, textTransform: "uppercase", opacity: 0.7, marginBottom: 14 }}>
                Ce dont tu as besoin
              </p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, fontStyle: "italic", lineHeight: 1.7, color: "#E8E0D5" }}>
                {profile.opening}
              </p>
            </div>

            <div style={{ marginBottom: 52 }}>
              <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 9, letterSpacing: "0.25em", color: "rgba(232,224,213,0.22)", textTransform: "uppercase", marginBottom: 16 }}>
                Les 4 profils
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {DIAGNOSTIC_DATA.profiles.map(p => (
                  <div key={p.id} style={{
                    padding: "14px 18px", border: `1px solid ${p.id === profile.id ? p.color + "50" : "rgba(232,224,213,0.06)"}`,
                    background: p.id === profile.id ? `${p.color}08` : "transparent",
                    display: "flex", alignItems: "center", gap: 10
                  }}>
                    <span style={{ color: p.color, fontSize: 14 }}>{p.icon}</span>
                    <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 10, letterSpacing: "0.06em", color: p.id === profile.id ? "#E8E0D5" : "rgba(232,224,213,0.3)" }}>
                      {p.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ textAlign: "center", paddingTop: 40, borderTop: "1px solid rgba(232,224,213,0.06)" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontStyle: "italic", fontWeight: 300, color: "rgba(232,224,213,0.45)", marginBottom: 32, lineHeight: 1.7 }}>
                Ce diagnostic t'a montré quelque chose.<br />Un accompagnement peut te montrer le chemin.
              </p>
              <div className="cta-row" style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                <button
                  className="cta-result"
                  style={{ background: profile.color, color: "#0A0908", fontWeight: 400 }}
                  onClick={() => window.open('https//calendly.com/cercledevie/nouvelle-reunion?subject=Suite au diagnostic SIGNAL', '_blank')}
                >
                  Reserve ton appel découverte
                </button>
                <button className="cta-secondary" onClick={()>window.location.href = 'https://calendly.com/cercledevie/nouvelle-reunion'}>Reserve ton appel découverte</button>
              </div>
              <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 9, letterSpacing: "0.3em", color: "rgba(232,224,213,0.15)", textTransform: "uppercase", marginTop: 40 }}>
                Signal — Alignement Identitaire
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
