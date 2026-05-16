-- ============================================================
-- MIGRAÇÃO: Criação da tabela leads
-- Projeto: Landing Page Imóveis
-- Execute este SQL no Supabase → SQL Editor
-- ============================================================

CREATE TABLE IF NOT EXISTS public.leads (
  id            BIGSERIAL PRIMARY KEY,
  nome          TEXT          NOT NULL,
  whatsapp      TEXT          NOT NULL,
  valor_imovel  TEXT          NOT NULL,
  status_nome   TEXT          NOT NULL,
  status_venda  TEXT          NOT NULL DEFAULT 'Novo',
  created_at    TIMESTAMPTZ   NOT NULL DEFAULT now()
);

-- Comentários descritivos nas colunas
COMMENT ON TABLE  public.leads              IS 'Leads captados pelo formulário da landing page';
COMMENT ON COLUMN public.leads.nome         IS 'Nome completo do lead';
COMMENT ON COLUMN public.leads.whatsapp     IS 'WhatsApp no formato (99) 99999-9999';
COMMENT ON COLUMN public.leads.valor_imovel IS 'Faixa de valor do imóvel selecionada';
COMMENT ON COLUMN public.leads.status_nome  IS 'Status do nome (crédito) informado pelo lead';
COMMENT ON COLUMN public.leads.status_venda IS 'Status do processo de venda — padrão: Novo';

-- Habilitar Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Política: permite INSERT para usuários anônimos (formulário público)
CREATE POLICY "allow_anon_insert"
  ON public.leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Política: apenas usuários autenticados podem SELECT (protege os dados)
CREATE POLICY "allow_auth_select"
  ON public.leads
  FOR SELECT
  TO authenticated
  USING (true);
