import { test, expect } from '@playwright/test';

test.describe('Landing Page VHF Bank - Navegação e Redirecionamentos', () => {

  test('1. Home: deve carregar textos principais e botões de navegação interna', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('h1')).toContainText('O Modelo Inovador de Cashback');

    await page.getByRole('link', { name: /Sou Cliente e Quero Vantagens/i }).click();
    await expect(page).toHaveURL(/.*clientes/);
    await expect(page.locator('h2')).toContainText('Liberdade Financeira e Cashback em TUDO!');

    await page.goto('/');
    await page.getByRole('link', { name: /Sou Empresa e Quero Vender Mais/i }).click();
    await expect(page).toHaveURL(/.*empresas/);
    await expect(page.locator('h2')).toContainText('Aumente seu Faturamento e Fidelize Clientes');
  });

  test('2. Navbar: deve navegar entre as páginas e ter o link correto do Escritório Virtual', async ({ page }) => {
    await page.goto('/');

    const linkEscritorio = page.locator('nav').getByRole('link', { name: 'Escritório Virtual' });
    await expect(linkEscritorio).toHaveAttribute('href', 'https://vfbank.conectar.site/lojista/site/gerenciar');
    await expect(linkEscritorio).toHaveAttribute('target', '_blank');
  });

  test('3. Aba Clientes: deve validar links da Google Play, App Store e remoção do código convite', async ({ page }) => {
    await page.goto('/clientes');

    await expect(page.getByText('557315')).toHaveCount(0);

    const btnGooglePlay = page.getByRole('link', { name: /Google Play/i });
    await expect(btnGooglePlay).toHaveAttribute('href', 'https://play.google.com/store/apps/details?id=vfbank.portador');
    await expect(btnGooglePlay).toHaveAttribute('target', '_blank');

    const btnAppStore = page.getByRole('link', { name: /App Store/i });
    await expect(btnAppStore).toHaveAttribute('href', 'https://apps.apple.com/br/app/vf-bank/id6578454221');
    await expect(btnAppStore).toHaveAttribute('target', '_blank');

    const fotoCliente = page.locator('section img');
    await expect(fotoCliente).toHaveCount(1);
    await expect(fotoCliente).toBeVisible();
  });

  test('4. Aba Empresas: deve redirecionar corretamente para o WhatsApp com e sem mensagem', async ({ page }) => {
    await page.goto('/empresas');

    const btnEspecialista = page.getByRole('link', { name: /Falar com um Especialista/i });
    await expect(btnEspecialista).toHaveAttribute('href', 'https://wa.me/5561983306686');
    await expect(btnEspecialista).toHaveAttribute('target', '_blank');

    const btnCadastrar = page.getByRole('link', { name: /Cadastrar Minha Empresa/i });
    const hrefCadastrar = await btnCadastrar.getAttribute('href');
    
    expect(hrefCadastrar).toContain('https://wa.me/5561983306686');
    expect(decodeURIComponent(hrefCadastrar || '')).toContain('Olá, quero cadastrar minha empresa');
    await expect(btnCadastrar).toHaveAttribute('target', '_blank');
  });

  test('5. Verificar se as imagens da Logo (Navbar e Footer) carregaram de verdade sem quebrar', async ({ page }) => {
    await page.goto('/');

    const logoNav = page.locator('nav img');
    const logoFooter = page.locator('footer img');

    await expect(logoNav).toBeVisible();
    await expect(logoFooter).toBeVisible();

    const isNavLogoLoaded = await logoNav.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0);
    const isFooterLogoLoaded = await logoFooter.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0);

    expect(isNavLogoLoaded, 'A imagem da logo na Navbar está quebrada ou não foi encontrada na pasta public').toBe(true);
    expect(isFooterLogoLoaded, 'A imagem da logo no Rodapé está quebrada ou não foi encontrada na pasta public').toBe(true);
  });

});