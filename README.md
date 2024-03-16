# gpt-pilot-ai-companion

create me this as a web app 

“ 🧑‍✈️ GPT PILOT 🧑‍✈️
Pythagora-io%2Fgpt-pilot | Trendshift

Pythagora-io%2Fgpt-pilot | Trendshift


GPT Pilot doesn't just generate code, it builds apps!

See it in action

(click to open the video in YouTube) (1:40min)

Pythagora-io%2Fgpt-pilot | Trendshift

GPT Pilot is the core technology for the Pythagora VS Code extension that aims to provide the first real AI developer companion. Not just an autocomplete or a helper for PR messages but rather a real AI developer that can write full features, debug them, talk to you about issues, ask for review, etc.

📫 If you would like to get updates on future releases or just get in touch, join our Discord server or you can add your email here. 📬

🔌 Requirements
🚦How to start using gpt-pilot?
🔎 Examples
🐳 How to start gpt-pilot in docker?
🧑‍💻️ CLI arguments
🏗 How GPT Pilot works?
🕴How's GPT Pilot different from Smol developer and GPT engineer?
🍻 Contributing
🔗 Connect with us
🌟 Star history
GPT Pilot aims to research how much LLMs can be utilized to generate fully working, production-ready apps while the developer oversees the implementation.

The main idea is that AI can write most of the code for an app (maybe 95%), but for the rest, 5%, a developer is and will be needed until we get full AGI.

If you are interested in our learnings during this project, you can check our latest blog posts.



Python 3.9+
🚦How to start using gpt-pilot?

👉 If you are using VS Code as your IDE, the easiest way to start is by downloading GPT Pilot VS Code extension. 👈

Otherwise, you can use the CLI tool.

After you have Python and (optionally) PostgreSQL installed, follow these steps:

git clone https://github.com/Pythagora-io/gpt-pilot.git (clone the repo)
cd gpt-pilot
python -m venv pilot-env (create a virtual environment)
source pilot-env/bin/activate (or on Windows pilot-env\Scripts\activate) (activate the virtual environment)
pip install -r requirements.txt (install the dependencies)
cd pilot
mv .env.example .env (or on Windows copy .env.example .env) (create the .env file)
Add your environment to the .env file:
LLM Provider (OpenAI/Azure/Openrouter)
Your API key
database settings: SQLite/PostgreSQL (to change from SQLite to PostgreSQL, just set DATABASE_TYPE=postgres)
optionally set IGNORE_PATHS for the folders which shouldn't be tracked by GPT Pilot in workspace, useful to ignore folders created by compilers (i.e. IGNORE_PATHS=folder1,folder2,folder3)
python main.py (start GPT Pilot)
After, this, you can just follow the instructions in the terminal.

All generated code will be stored in the folder workspace inside the folder named after the app name you enter upon starting the pilot.

Click here to see all example apps created with GPT Pilot.

🐳 How to start gpt-pilot in docker?

git clone https://github.com/Pythagora-io/gpt-pilot.git (clone the repo)
Update the docker-compose.yml environment variables, which can be done via docker compose config. If you wish to use a local model, please go to https://localai.io/basics/getting_started/.
By default, GPT Pilot will read & write to ~/gpt-pilot-workspace on your machine, you can also edit this in docker-compose.yml
run docker compose build. this will build a gpt-pilot container for you.
run docker compose up.
access the web terminal on port 7681
python main.py (start GPT Pilot)
This will start two containers, one being a new image built by the Dockerfile and a Postgres database. The new image also has ttyd installed so that you can easily interact with gpt-pilot. Node is also installed on the image and port 3000 is exposed.

--get-created-apps-with-steps

Lists all existing apps.

python main.py --get-created-apps-with-steps

Continue working on an existing app using app_id

python main.py app_id=<ID_OF_THE_APP>

Continue working on an existing app from a specific step (eg: development_planning)

python main.py app_id=<ID_OF_THE_APP> step=<STEP_FROM_CONST_COMMON>

Continue working on an existing app from a specific development step

python main.py app_id=<ID_OF_THE_APP> skip_until_dev_step=<DEV_STEP>
Continue working on an existing app from a specific development step. If you want to play around with GPT Pilot, this is likely the flag you will often use.

python main.py app_id=<ID_OF_THE_APP> skip_until_dev_step=0
Erase all development steps previously done and continue working on an existing app from the start of development.

python main.py theme=light
 python main.py theme=dark

Here are the steps GPT Pilot takes to create an app:

You enter the app name and the description.
Product Owner agent like in real life, does nothing. :)
Specification Writer agent asks a couple of questions to understand the requirements better if project description is not good enough.
Architect agent writes up technologies that will be used for the app and checks if all technologies are installed on the machine and installs them if not.
Tech Lead agent writes up development tasks that the Developer must implement.
Developer agent takes each task and writes up what needs to be done to implement it. The description is in human-readable form.
Code Monkey agent takes the Developer's description and the existing file and implements the changes.
Reviewer agent reviews every step of the task and if something is done wrong Reviewer sends it back to Code Monkey.
Troubleshooter agent helps you to give good feedback to GPT Pilot when something is wrong.
Debugger agent hate to see him, but he is your best friend when things go south.
Technical Writer agent writes documentation for the project.

🕴How's GPT Pilot different from Smol developer and GPT engineer?

GPT Pilot works with the developer to create a fully working production-ready app - I don't think AI can (at least in the near future) create apps without a developer being involved. So, GPT Pilot codes the app step by step just like a developer would in real life. This way, it can debug issues as they arise throughout the development process. If it gets stuck, you, the developer in charge, can review the code and fix the issue. Other similar tools give you the entire codebase at once - this way, bugs are much harder to fix for AI and for you as a developer.

Works at scale - GPT Pilot isn't meant to create simple apps but rather so it can work at any scale. It has mechanisms that filter out the code, so in each LLM conversation, it doesn't need to store the entire codebase in context, but it shows the LLM only the relevant code for the current task it's working on. Once an app is finished, you can continue working on it by writing instructions on what feature you want to add.
If you are interested in contributing to GPT Pilot, I would be more than happy to have you on board and also help you get started. Feel free to ping zvonimir@pythagora.ai, and I'll help you get started.

Other than the research, GPT Pilot needs to be debugged to work in different scenarios. For example, we realized that the quality of the code generated is very sensitive to the size of the development task. When the task is too broad, the code has too many bugs that are hard to fix, but when the development task is too narrow, GPT also seems to struggle in getting the task implemented into the existing code.

To improve GPT Pilot, we are tracking some events from which you can opt out at any time. You can read more about it here.

🌟 As an open-source tool, it would mean the world to us if you starred the GPT-pilot repo 🌟

💬 Join the Discord server to get in touch.”


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/gpt-pilot-ai-companion.git
cd gpt-pilot-ai-companion
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
