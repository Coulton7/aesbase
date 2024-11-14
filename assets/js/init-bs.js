const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const triggerEl = document.querySelector('#global-overlay-search[data-bs-target="#globalSearch"')
bootstrap.Tab.getInstance(triggerEl).show();

