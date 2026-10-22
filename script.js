document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initWireframeInteractivity();
});

/**
 * Gerencia a troca de abas principais (Sidebar)
 */
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    navItems.forEach(button => {
        button.addEventListener('click', () => {
            const targetTabId = button.getAttribute('data-tab');

            // Remove classes ativas de tudo
            navItems.forEach(item => item.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));

            // Adiciona classe ativa no botão e na aba clicada
            button.classList.add('active');
            const targetTab = document.getElementById(targetTabId);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
}

/**
 * Gerencia os cliques no protótipo de Wireframe simulação de mídias
 */
function initWireframeInteractivity() {
    const wfCards = document.querySelectorAll('.wf-card');
    const previewPane = document.getElementById('material-preview');

    wfCards.forEach(card => {
        card.addEventListener('click', (event) => {
            const materialType = card.getAttribute('data-material');

            // Limpa estado ativo de outros cards
            wfCards.forEach(c => c.classList.remove('active-item'));
            
            // Adiciona destaque ao selecionado
            card.classList.add('active-item');

            // Renderiza o feedback no painel simulado
            renderPreview(materialType, previewPane);
        });
    });
}

/**
 * Injeta o HTML mockado de acordo com o arquivo selecionado no protótipo
 */
function renderPreview(type, container) {
    if (!container) return;

    switch(type) {
        case 'pdf':
            container.innerHTML = `
                <div style="border-left: 4px solid var(--accent-pdf); padding-left: 0.5rem;">
                    <span style="font-size:0.75rem; color:var(--accent-pdf); font-weight:bold;">PDF INTERNO</span>
                    <p style="font-size:0.9rem; font-weight:600; margin: 2px 0;">Abrindo visualizador de PDF embutido...</p>
                    <p style="font-size:0.8rem; color:var(--text-muted);">Página 1 de 12 - Introdução à Primeira Lei de Mendel</p>
                </div>`;
            break;
            
        case 'video':
            container.innerHTML = `
                <div style="border-left: 4px solid var(--accent-video); padding-left: 0.5rem;">
                    <span style="font-size:0.75rem; color:var(--accent-video); font-weight:bold;">YOUTUBE EMBED</span>
                    <p style="font-size:0.9rem; font-weight:600; margin: 2px 0;">Tocando: Resolução de Exercícios FUVEST</p>
                    <div style="background:#000; color:#fff; height:40px; margin-top:0.5rem; font-size:0.7rem; display:flex; align-items:center; justify-content:center; border-radius:4px;">Simulação de Player de Vídeo</div>
                </div>`;
            break;
            
        case 'photo':
            container.innerHTML = `
                <div style="border-left: 4px solid var(--accent-photo); padding-left: 0.5rem;">
                    <span style="font-size:0.75rem; color:var(--accent-photo); font-weight:bold;">GALERIA</span>
                    <p style="font-size:0.9rem; font-weight:600; margin: 2px 0;">Foto capturada em 21/10/2026</p>
                    <p style="font-size:0.8rem; color:var(--text-muted);">[Preview de imagem da lousa com zoom e pan ativados]</p>
                </div>`;
            break;
            
        case 'note':
            container.innerHTML = `
                <div style="border-left: 4px solid var(--accent-note); padding-left: 0.5rem;">
                    <span style="font-size:0.75rem; color:var(--accent-note); font-weight:bold;">BLOCO DE NOTAS</span>
                    <p style="font-size:0.85rem; font-style:italic; color:#334155; margin-top: 4px;">"Revisar cruzamentos recessivos antes do simulado de sábado. Lembrar que AA e Aa manifestam conceito dominante."</p>
                </div>`;
            break;
            
        default:
            container.innerHTML = `<p class="preview-placeholder">Selecione um arquivo válido.</p>`;
    }
}
