
import axios from 'axios';

export const downloadPdf = async (id: number) => {
  const response = await axios.get(
    'http://localhost:3001/relatorio/' + id,
    {
      responseType: 'blob',
    }
  );

  const url = window.URL.createObjectURL(new Blob([response.data]));

  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'relatorio.pdf');

  document.body.appendChild(link);
  link.click();
  link.remove();
};