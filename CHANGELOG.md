# 📦 Changelog  
Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.  
O formato segue o padrão [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

---

## [1.0.0] - 2025-11-10
### 🎉 Primeira versão estável (MVP)

#### 🚀 Funcionalidades principais
- **Autenticação (Firebase Auth):**
  - Login de usuários (alunos e professores) via e-mail e senha.
  - Persistência de sessão e redirecionamento automático.
- **Gerenciamento de Projetos (Firestore):**
  - Criação, listagem e exibição detalhada de projetos.
  - Abas para filtrar status: *A Fazer*, *Em Andamento*, *Concluído* e *Pendente*.
  - Modal de visualização completa de informações do projeto.
- **Controle de acesso:**
  - Projetos criados por alunos ficam *pendentes* até aprovação de um professor.
  - Páginas protegidas com `react-router-dom`.
- **Formulário de criação de projeto:**
  - Campos: nome, descrição, professor, alunos, desenvolvedores, status, datas e aprovação.
  - Integração completa com Firestore.
- **Página “Sobre o CITEc”:**
  - Informações institucionais sobre o Centro de Inovação Tecnológica do CESMAC.
- **Layout responsivo e moderno:**
  - Uso de TailwindCSS ou Material UI.
  - FlatList de projetos com cards interativos (Pressable).

---

### 🧱 Estrutura e Configuração
- Projeto inicializado com **Vite + React + TypeScript**.
- Configuração de **Firebase (Auth + Firestore)**.
- Criação de **contexts** (AuthContext) para controle global de usuário.
- Organização modular em `pages/`, `components/`, `services/`, `types/` e `contexts/`.

---

### 🧠 Melhorias Técnicas
- Tipagem completa com **TypeScript**.
- Componentização de modais e formulários.
- Controle de rotas privadas.
- Responsividade para desktop e mobile.
- Estrutura preparada para futura migração para PWA.

---

### 🧩 Commits principais
- `chore:` setup inicial, configuração do Firebase e estrutura base.  
- `feat(auth):` criação de contexto de autenticação e login.  
- `feat(routes):` implementação de rotas públicas e privadas.  
- `feat(projects):` CRUD completo de projetos no Firestore.  
- `feat(about):` página institucional do CITEc.  
- `fix:` correções de layout e validação de formulário.  
- `docs:` README e changelog atualizados.

---

### ⚙️ Deploy
- Projeto configurado e publicado no **Firebase Hosting**.  
- Integração contínua prevista para futuras atualizações.

---

## 📅 Próximas melhorias (planejadas)
- Sistema de notificações para aprovações de projetos.
- Dashboard com estatísticas de status.
- Integração com armazenamento de imagens no Firebase Storage.
- Migração para **PWA** (instalável no navegador).
