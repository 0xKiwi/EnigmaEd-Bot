const defText = 'REEEEEEEEEEEEEEEEE NORMIES GET OUT REEEE';

// Enigma Section
const whatIsEngima = `Enigma is building a privacy layer for the decentralized web. By combining secure computation technologies with blockchain, Enigma is creating the first platform for scalable, privacy-preserving smart contracts. We believe that solving for data privacy is the missing piece to building a more decentralized, sustainable future - and we believe that the first truly decentralized applications to be adopted by millions of users will run on Enigma.
\nYou can learn much more about Enigma’s technology, vision, team, and community from this bot. You can also learn more at www.enigma.co and on our blog at blog.enigma.co.
\nEnigma Table of Contents: https://blog.enigma.co/welcome-to-enigma-start-here-e65c8c9125ef`;

const secretContracts = `A few years ago, after the successful application of Bitcoin to decentralizing money, an old and important idea resurfaced. That idea, today more commonly known as smart contracts, posited that if we can solve the problem of trust in the banking system through code, why not do the same for every other application?
\nEnigma proposes a new concept called “secret contracts.” These contracts expand on smart contracts in that they not only solve for correctness, but also for privacy, because they can hide the data completely from the nodes that execute secret contracts. With these contracts, users and applications can operate in an environment where it’s safe to include private or sensitive data, which most real-world use-cases require. Secret contracts are the next evolution of smart contracts, opening up thousands of new applications in industries like credit, finance, healthcare, machine learning, gaming, and many more.
\nA smart contract is a unit of code that is executed not by a single computer, but by many systems — essentially all the nodes in a blockchain network. Together, these reach an agreement about some state of the world, making it infeasible for an attacker to tamper with that state, or convince any honest actor that some false claim is in fact, true. However, blockchains (and by extension, smart contracts) have one glaring problem that is often overlooked — all data stored on them is public.
\nLearn more about the power of (and technology behind) secret contracts on the Enigma blog: https://blog.enigma.co/defining-secret-contracts-f40ddee67ef2`

const enigmaTeam = `Enigma began in 2015 with our CEO and co-founder Guy Zyskind’s research at MIT. His whitepapers on blockchain and data privacy (including the Enigma whitepaper) now have over 500 combined citations. Our core team is primarily composed of MIT graduates and researchers, all deeply passionate about data privacy and decentralization. Enigma now has over 15 full time employees distributed all over the world, with hubs in San Francisco and Tel Aviv.`

const whatIsENG = `The ENG token is critical to the function of the Enigma network, playing two primary roles: as payment for computation and as a requirement for staking. Critical networks like Enigma are made possible by the existence of utility tokens like ENG that serve as an alignment mechanism.
\nThe primary function of ENG in the Enigma protocol is to pay for computations, very similar to the function of Gas (ether) in the Ethereum network. When an application runs a secret contract on the Enigma network, end users who interact with the application (or the entity that deployed the application) has to spend ENG to get the computation done in a privacy-preserving way.
\nThe Enigma network also utilizes a multi-tiered ENG staking system (“secret” computational nodes as well as consensus nodes). In this system, the more tokens a secret node stakes, the more likely she is to be selected to work on the next secret contract. Nodes acquire and stake ENG to increase their chance of running secret contracts and thus earning a return on their stake. In other words - the more ENG staked, the more computations you are likely to run.
\nAsk me about “secret nodes” to learn more, or click here: https://blog.enigma.co/secret-nodes-exploring-staking-stakeholders-and-eng-d69a68e3d0fd`;

const secretNodes = `Secret nodes are network participants that run a node in the Enigma network and ensure secret contracts are executed in a privacy preserving manner. The Enigma network uses a Proof of Stake model for worker selection, which means the probability of a worker node to be selected to run the next secret contract is proportional to the amount of ENG tokens staked by the node. This means that the greater your stake, the greater the cumulative rewards you can earn, as your likelihood to be sampled increases proportionally.
There will also be a minimum amount of ENG required to run a staking node. That number is expected to be higher in the early days, and gradually to decrease to accommodate thousands and potentially tens of thousands of nodes. You can expect significantly more details on node running and staking to be released closer to our mainnet launch.
There will also be consensus nodes which operate the Enigma blockchain itself — they validate computations and set the final ordering of state changes. In Enigma’s first release, Discovery, these type of nodes are not yet available to run as we instead rely on Ethereum for verification. In later releases of Enigma, we will use our own blockchain for verification.
https://blog.enigma.co/secret-nodes-exploring-staking-stakeholders-and-eng-d69a68e3d0fd`;

const partners = `Enigma is collaborating with many different companies and projects. In June Intel and Enigma jointly announced our collaboration on researching and developing privacy-preserving technologies and implementing “secret contracts” on Ethereum. You can read more on our blog: https://blog.enigma.co/announcing-enigmas-collaboration-with-intel-43bbf73a86a7
\nIn addition, Enigma has previously announced launch partners who are helping us build foundational solutions utilizing Enigma’s protocol. They include:
\n\tOcean Protocol (private voting for TCRs)
\n\tDatawallet (ad fraud prevention)
\n\tColendi (decentralized credit)
\n\t2key (data access control)
\n\tEximchain (supply chain finance)
\n\tDatacoup (searching over encrypted metadata)
\n\tRebloc (private data validation)
\n\tPortal Network (secret auctions)
\nEnigma is continuing to add more launch partners and industry collaborators - expect more announcements soon :)
\nhttps://blog.enigma.co/introducing-the-enigma-launch-partners-642336f752cc`;

const roadmap = `Our long term vision is clear: we are building Enigma to be the privacy layer for the decentralized Web. Achieving this is a multi-year process, and we can only achieve our ambition through hard work, continuous development, active research, and strong collaboration. We are developing Enigma in stages, codenamed Discovery, Voyager, Valiant, and Defiant.
The first iteration of the Discovery testnet has already been released. Discovery features our first version of secret contracts, utilizing a hardware-based privacy solutions - Intel SGX. Discovery’s mainnet release will introduce networked nodes and incentives (i.e. node rewards) as well as support for WASM in Enigma’s core virtual machine (our computation engine). By doing so, we enable the use of much more scalable programming languages/models, the ability to use standard and common libraries in your code (beyond single-use blockchain code), most of what’s needed to have oracle functionality already built into Enigma  (i.e. getting external data feeds and communicating with the world outside our own network and blockchain), and a common computation engine for ANY privacy-preserving technology we’d like to implement, including SGX, MPC, FHE, ZKPs, and other tech.
In Voyager, we will be introducing Secret Contracts 2.0, featuring multi-party computation. We will also launch a standalone Enigma blockchain (with a simplified consensus model and limited features), allowing dApps to move to our own network instead of relying on Ethereum. This will increase scalability by orders of magnitude. Note that our chain will still use Ethereum as a parent-chain for additional security until Defiant is released.
Valiant is when our main scalability and decentralization efforts take place. Usually, greater decentralization comes at a performance cost. In this major network update, the goal is to have a fully open and secure consensus in the Enigma Chain, while not diminishing (and actually increasing) performance through the use of more elaborate sharding.
Defiant brings complete chain-independence. The Enigma network will operate its inner Enigma Chain completely independently of other networks, which may also mean moving the Enigma token from Ethereum to a native coin in Enigma. This would complete the process of Enigma becoming completely non-reliant on any other solutions.
Learn more at blog.enigma.co/protocol and in the following post: https://blog.enigma.co/expanding-enigmas-roadmap-towards-a-privacy-layer-for-the-decentralized-web-f1d6b7908251`;

// Privacy Section
const whyPrivacy = `Why do we need privacy solutions? At their inception, blockchains were designed to be public. A public blockchain is a distributed ledger where entries are auditable and permissionless. Anyone can attempt to record an entry, and anyone can read the entries themselves. Blockchain’s innovation was solving for consensus, trust, and verifiability – but this came at a cost. For blockchains, the major tradeoffs were data privacy and scalability.
As every transaction is public, you would not want to keep any kind of private or sensitive data on the blockchain – anything from votes to personally identifiable information to trade secrets. And blockchains themselves are difficult to scale, again by design: there is a limited amount of transactions or computations you would want to track on a blockchain before it becomes too expensive and slow.
Blockchains are bad at privacy by design so that they can be good at what they’re built for. But this means that blockchains by themselves can only solve so many real-world problems, especially as they are limited by scalability issues.
While some people (such as Bitcoin maximalists) believe that blockchain can only be good for one thing, many others (such as the Enigma team) are working hard to build supplementary technologies that can work alongside blockchains. These technologies will be of critical importance if blockchains are to achieve their promise of decentralizing the world beyond just auditable payments. And if they succeed, we may one day remember these privacy technologies as the most powerful and valuable innovations of the 21st century – not blockchain itself.
You can use this bot to learn more about different types of privacy solutions Enigma is working with to build their protocol, including MPC and TEEs.`;

const mpc = `Known as MPC for short, secure multi-party computation starts by asking a philosophical question. Is there any trusted third party, a supercomputer of sorts, that we can send our data to and trust it to perform computations on our behalf, without potentially leaking our private information?
\nMPC proposes to emulate such a trusted third party by combining untrusted parties. In other words, we can design a decentralized network of computers that will ensure that no data leaks during computation. Each computer in the network only sees encrypted bits of dataâ€Šâ€”â€Šbut never anything meaningful. The only way to recover the plaintext data is by having all the players in a network collude to leak data (as opposed to gaining control of a secret key).
\nMore info:
\n\thttps://sepior.com/blog/2017/4/27/a-short-introduction-to-multiparty-computation-mpc
\n\thttps://en.wikipedia.org/wiki/Secure_multi-party_computation`;

const tees = `Trusted Execution Environments (TEEs) are a hardware-based privacy solution. In a TEE-based network, secure hardware is used to protect the data that is being used from leaking outside the hardware itself. Using techniques like remote attestation, users of the network can be sure that the encrypted data submitted to the network remains private. 
\nThe primary tradeoff of TEEs is that you must trust that the hardware has not been compromised. However, performance can be significantly faster than with purely software-based methods of secure computation.
\nMore info:
\n\thttps://internetofthingsagenda.techtarget.com/blog/IoT-Agenda/Trusted-execution-environments-What-how-and-why
\n\thttps://blog.quarkslab.com/introduction-to-trusted-execution-environment-arms-trustzone.html`;

const zkps = `ZKPs focus on proving/disproving statements. The goal is to have the prover prove to the verifier some argument, without revealing any other information.
\nThe simplest type of ZKP are proofs of knowledge. In this version, the prover  must show that he possesses knowledge of some secret information, without revealing it. One real life example where ZKP is useful is with authentication - however, in terms of multi-actor systems such as auctions, ZKP is limited as bidders would still need to trust an auctioneer to view and compare the votes to reveal the winner (or 'secret').
\nTwo other major limitations are 1) Generating the proof is still incredibly slow  (proving relatively simple statements would still take minutes), and 2) the cryptographic assumptions used are fairly new and not thoroughly researched.
\nMore info:
\n\thttps://blog.ethereum.org/2016/12/05/zksnarks-in-a-nutshell/
\n\thttps://z.cash/technology/zksnarks/`;

const fhe = `Fully homomorphic encryption (FHE) is a purely software-based solution to privacy. 
\nIn traditional encryption, doing a computation over the ciphertext-space does not affect the ciphertext in the same way as doing the computation over the plaintext data. If, however, it does, then we call this scheme homomorphic.
\nNote that for now FHE remains a theoretical advancement, and it is very challenging to make these types of schemes practical for real-world use.
\nMore info:
\n\thttps://blog.cryptographyengineering.com/2012/01/02/very-casual-introduction-to-fully/
\n\thttps://eprint.iacr.org/2015/1192.pdf`;

// Dev section
const testnet = defText;

const docs = defText;

const gettingStarted = defText;

const devForum = defText;

// Community Section
const ambassador = `Enigma is supported by an incredible global community of volunteer Ambassadors, with over 40 Ambassadors participating from over 15 countries. Ambassadors help support Enigma on initiatives like community education, business development, documentation, marketing, live events, and student outreach. Ambassadors work directly with the core Enigma team, receiving unique access to our developers and business leads as well as educational resources and networking opportunities. If you’re passionate about privacy and want to become a part of this incredible global network, you can learn more about our Ambassador program at https://blog.enigma.co/ambassadors.`;

const telegram = `The Enigma official English-language Telegram is @EnigmaProject.
\nOur Enigma announcement channel is @EnigmaProjectANN.`;

const devForumCom = `The Enigma developer forum is located at https://forum.enigma.co. Here you can discuss our protocol, dApp development, nodes, and more!`;

const reddit = `The Enigma official Reddit is https://www.reddit.com/r/EnigmaProject.`;

const twitter = `The Enigma official Twitter is https://www.twitter.com/EnigmaMPC. Please give us a follow :)`;

const discord = `The Enigma official Discord is https://discord.gg/TTMVPR3. Please contribute to the discussion :)`;

const botStructure = [
  {
    Enigma: [
      {
        'What is Enigma?': whatIsEngima,
        'Secret Contracts': secretContracts,
      },
      {
        'Enigma Team': enigmaTeam,
        'What is ENG?': whatIsENG,
      },
      {
        'Secret Nodes': secretNodes,
        Partners: partners,
        Roadmap: roadmap,
      },
    ],
    Privacy: [
      {
        'Why Privacy?': whyPrivacy,
        MPC: mpc,
      },
      {
        TEEs: tees,
        'ZK-Proofs': zkps,
        FHE: fhe,
      },
    ],
  },
  {
    // 'Enigma for Devs': [
    //   {
    //     Testnet: testnet,
    //     Documentation: docs,
    //   },
    //   {
    //     'Getting Started': gettingStarted,
    //     'Dev Forum': devForum,
    //   },
    // ],
    'Enigma Community': [
      {
        Ambassadors: ambassador,
        Telegram: telegram,
      },
      {
        'Dev Forum': devForumCom,
        Reddit: reddit,
      },
      {
        Twitter: twitter,
        Discord: discord,
      },
    ],
  },
];

module.exports = botStructure;
