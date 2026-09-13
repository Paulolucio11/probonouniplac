PROJETO PRO BONO UNIPLAC — SITE + PAINEL ADMINISTRATIVO

Esta versão mantém o visual do site e acrescenta duas melhorias principais:

1) MAPA
- Visual cartográfico mais leve, colorido e com efeito de marca d'água.
- Marcadores de ações realizadas e previstas.
- Clique no marcador ou na cidade para abrir detalhes.
- O botão “Abrir no Google Maps” leva diretamente à localização/pesquisa correspondente no Google Maps.
- Zoom, centralização e lista lateral continuam disponíveis.

2) ATUALIZAÇÃO PELO PRÓPRIO RESPONSÁVEL
A pasta apps_script contém um painel baseado em Google Apps Script + Google Sheets.
A ideia é não precisar mais editar o código do site para mudar “Previsto” para “Realizado”.

ARQUIVOS DO PAINEL
- Code.gs — lógica do Google Apps Script e acesso à planilha.
- Index.html — versão do site preparada para rodar como Web App do Google.
- Style.html — estilos do site.
- Admin.html — painel privado de atualização.
- appsscript.json — manifesto do projeto.

COMO CONFIGURAR O PAINEL GOOGLE
1. Entre na conta Google que será a responsável pelo projeto.
2. Crie uma planilha Google vazia.
3. Abra Extensões > Apps Script.
4. No projeto Apps Script, substitua/crie os arquivos usando Code.gs, Index.html, Style.html e Admin.html desta pasta.
5. No Code.gs, altere CONFIG.ADMIN_EMAIL para o seu e-mail Google.
6. Execute setupSpreadsheet() uma única vez pelo editor do Apps Script e autorize o acesso à planilha.
7. A planilha receberá uma aba “Cronograma” com os 8 eventos.

PUBLICAÇÃO DO SITE
1. No Apps Script: Implantar > Nova implantação > Aplicativo da Web.
2. Executar como: você (proprietário da implantação).
3. Quem tem acesso: qualquer pessoa.
4. Copie a URL gerada. Essa é a URL pública que pode ser enviada no grupo.

PAINEL PRIVADO
1. Crie uma segunda implantação do mesmo projeto como Aplicativo da Web.
2. Para essa implantação, restrinja o acesso à sua conta Google (quando a interface oferecer “Somente eu”, use essa opção).
3. O acesso administrativo exige a conta indicada em CONFIG.ADMIN_EMAIL.
4. Abra a URL dessa segunda implantação com ?admin=1 para entrar no painel.
5. No painel, altere a situação para “Realizado” e clique em “Salvar alteração”.

COMO FICA NA PRÁTICA
- Pessoas do grupo recebem somente o link público do site.
- Você guarda o link do painel administrativo.
- Você altera uma ação no painel/planilha.
- O site público consulta o cronograma atualizado automaticamente.

IMPORTANTE SOBRE O MAPA
As coordenadas atuais são referências aproximadas das localidades do cronograma. Antes de divulgar oficialmente, confirme as coordenadas exatas de cada ponto de atendimento, principalmente nos eventos que ainda estão como “A definir”.

IMPORTANTE SOBRE O FORMULÁRIO
O formulário de atendimento continua sendo apenas uma demonstração. Como ele poderá receber dados pessoais e informações jurídicas sensíveis, o recebimento real deve ser ligado a um ambiente apropriado e com controle de acesso.
