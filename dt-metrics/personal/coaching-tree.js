jQuery(document).ready(function () {
  if (window.wpApiShare.url_path.startsWith('metrics/personal/coaching-tree')) {
    coaching_tree();
  }

  function coaching_tree() {
    'use strict';
    let chart = jQuery('#chart');
    let spinner = ' <span class="loading-spinner active"></span> ';
    chart.empty().html(spinner);
    jQuery('#metrics-sidemenu').foundation('down', jQuery('#personal-menu'));

    let translations = window.dtMetricsProject.data.translations;

    chart.empty().html(`
        <span class="section-header">${window.SHAREDFUNCTIONS.escapeHTML(translations.title_coaching_tree)}</span><hr>
        <div class="grid-x grid-padding-x">
            <div class="cell">
                <div class="scrolling-wrapper" id="generation_map">${spinner}</div>
            </div>
        </div>
        <div id="modal" class="reveal" data-reveal></div>
        <br><br>
       `);

    window.makeRequest('POST', 'metrics/my/coaching_tree').then((response) => {
      // console.log(response)
      jQuery('#generation_map').empty().html(response);
      jQuery('#generation_map li:last-child').addClass('last');
      new window.Foundation.Reveal(jQuery('#modal'));
    });
  }
});
