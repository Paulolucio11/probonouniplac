const DESTINO = 'probono@uniplaclages.edu.br';

function doPost(e) {
  const p = (e && e.parameter) ? e.parameter : {};

  // Campo invisível anti-spam (honeypot).
  if ((p.website || '').trim() !== '') {
    return ContentService.createTextOutput('OK');
  }

  const nome = (p.nome || '').trim();
  const cidade = (p.cidade || '').trim();
  const telefone = (p.telefone || '').trim();
  const email = (p.email || '').trim();
  const motivo = (p.motivo || '').trim();

  if (!nome || !cidade || !telefone || !email || !motivo) {
    return ContentService.createTextOutput('Dados incompletos.');
  }

  const assunto = 'Nova solicitação de atendimento — Projeto Pro Bono UNIPLAC';
  const corpo = [
    'NOVA SOLICITAÇÃO DE ATENDIMENTO',
    'PROJETO DE EXTENSÃO PRO BONO — UNIPLAC',
    '',
    'DADOS DO SOLICITANTE',
    'Nome completo: ' + nome,
    'Cidade: ' + cidade,
    'Telefone: ' + telefone,
    'E-mail: ' + email,
    '',
    'MOTIVO DA PROCURA',
    motivo,
    '',
    '---',
    'Mensagem recebida pelo portal do Projeto Pro Bono UNIPLAC.',
    'A equipe poderá entrar em contato pelos dados informados.'
  ].join('\n');

  MailApp.sendEmail({
    to: DESTINO,
    replyTo: email,
    subject: assunto,
    body: corpo,
    name: 'Projeto Pro Bono UNIPLAC'
  });

  return ContentService.createTextOutput('OK');
}
