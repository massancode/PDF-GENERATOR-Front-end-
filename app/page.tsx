'use client';

import { useMutation } from '@tanstack/react-query';
import { downloadPdf } from '@/services/downloadPdf';

export default function Home() {
  
  const mutation = useMutation({
    mutationFn: downloadPdf,
  });

  return (
    <div style={{ padding: 20 }}>
      <h1>Gerar PDF</h1>

      <button
        onClick={() => mutation.mutate(1)}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Gerando...' : 'Baixar PDF'}
      </button>

      {mutation.isError && <p>Erro ao gerar PDF</p>}
    </div>
  );
}