document.addEventListener("DOMContentLoaded", function() {

    var urlArray = window.location.pathname.split('/');
    var urlLang = urlArray[1];
    var filterLang = urlLang;

    if(filterLang == 'en'){
        if(document.querySelector("#contact-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass: "hs-visible-form blue-background",
                submitButtonClass: "btn btn-danger"
            });
        } else if(document.querySelector("#modal-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        } else if (document.querySelector("#sales-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "b0dff973-4804-41c0-bb6f-c6ff8b88ce2b",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        } else if(document.querySelector("#location-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "d0bf7089-7cad-47c2-8199-b516edecdddc",
                css: "",
                cssClass:"bg-primary text-white p-5",
                submitButtonClass:"btn btn-danger hs-button",
            });
        } else if (document.querySelector("#piping-booklet-form")){
            document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'none';
            if (document.querySelector('.resource-request').innerHTML.length > 0) {
                document.querySelector('.pdf-download').style.display = 'none';
            }
            
            function getUrlVars() {
                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for(var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    vars.push(hash[0]);
                    vars[hash[0]] = hash[1];
                }
                return vars;
            }
            
            var submitString = getUrlVars()["fs"];
            if(submitString=='y'){
                document.querySelector('.pdf-download').style.display = 'block';;
                document.querySelector('.resource-request').style.display = 'none';
                document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'block';;
            }

            hbspt.forms.create({
                portalId: "2248916",
                formId: "c2a17ea4-d514-4e7e-8825-633553a28e04",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
                onFormSubmit: function ($form){
                    var deliverability = parseFloat (document.querySelector('.deliverable').textContent);
                    if(deliverability === 0){
                        window.location.href = window.location.pathname+'?fs=y'
                    }
                }
            });
        } else if (document.querySelector("#download-resource")) {
            document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'none';
            if (document.querySelector('.resource-request').innerHTML.length > 0) {
                document.querySelector('.pdf-download').style.display = 'none';
            }
            function getUrlVars() {
                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for(var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    vars.push(hash[0]);
                    vars[hash[0]] = hash[1];
                }
                return vars;
            }

            var submitString = getUrlVars()["fs"];
            if(submitString=='y'){
                document.querySelector('.pdf-download').style.display = 'block';;
                document.querySelector('.resource-request').style.display = 'none';
                document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'block';;
            }

            hbspt.forms.create({
                portalId: "2248916",
                formId: "0d6eb558-5d3a-48e6-977f-448765cc24b6",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
                onFormSubmit: function ($form){
                    var deliverability = parseFloat (document.querySelector('.deliverable').textContent);
                    if(deliverability === 0){
                        window.location.href = window.location.pathname+'?fs=y'
                    }
                }
            });
        } else if (document.querySelector("technical-drawings-form")) {
            document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'none';
            if (document.querySelector('.resource-request').innerHTML.length > 0) {
                document.getElementById("disclaimer").style.display = "block";
                document.querySelector('#resource-table').style.display = 'none';
            }
             
            function getUrlVars() {
                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for(var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
                }
                return vars;
            }
             
            var submitString = getUrlVars()["fs"];
            if(submitString=='y'){
                document.querySelector('#resource-table').style.display = 'block';
                document.querySelector('.resource-request').style.display = 'none';
                document.getElementById("disclaimer").style.display = "none";
                document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'block';;
            }

            hbspt.forms.create({
                portalId: "2248916",
                formId: "f3b56435-d63b-471b-9416-03b57fd08e78",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
                onFormSubmit: function ($form){
                        window.location.href = window.location.pathname+'?fs=y'
                }
            });
        }
    } else if (filterLang == 'es'){
        if(document.querySelector("#contact-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "5ff19115-a5de-4318-bdf7-9f7663f72cf5",
                css:"",
                cssClass:"hs-visible-form blue-background",
                submitButtonClass:"btn btn-primary hs-button"
            });
        } else if(document.querySelector("#modal-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        } else if (document.querySelector("#sales-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "bb83ce2b-23ec-4761-b278-6aa63687ccaa",
                css: "",
                cssClass: "hs-overlay-form",
                submitButtonClass: "btn btn-primary hs-button",
            });
        } else if(document.querySelector("#location-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "d0bf7089-7cad-47c2-8199-b516edecdddc",
                css: "",
                cssClass:"bg-primary text-white p-5",
                submitButtonClass:"btn btn-danger hs-button",
            });
        } else if (document.querySelector("#download-resource")) {
            document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'none';
            if (document.querySelector('.resource-request').innerHTML.length > 0) {
                document.querySelector('.pdf-download').style.display = 'none';
            }
            function getUrlVars() {
                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for(var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    vars.push(hash[0]);
                    vars[hash[0]] = hash[1];
                }
                return vars;
            }

            var submitString = getUrlVars()["fs"];
            if(submitString=='y'){
                document.querySelector('.pdf-download').style.display = 'block';;
                document.querySelector('.resource-request').style.display = 'none';
                document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'block';;
            }

            hbspt.forms.create({
                portalId: "2248916",
                formId: "0d6eb558-5d3a-48e6-977f-448765cc24b6",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
                onFormSubmit: function ($form){
                    var deliverability = parseFloat (document.querySelector('.deliverable').textContent);
                    if(deliverability === 0){
                        window.location.href = window.location.pathname+'?fs=y'
                    }
                }
            });
        }
    } else if(filterLang =='fr'){
        if(document.querySelector("#contact-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "213ce03e-5c81-4526-9bcf-68a231dac51c",
                css:"",
                cssClass:"hs-visible-form blue-background",
                submitButtonClass:"btn btn-primary hs-button"
            });
        } else if(document.querySelector("#modal-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        } else if (document.querySelector("#sales-form")){
            hbspt.forms.create({
                portalId : "2248916",
                formId : "451a1582-c796-46eb-bb96-008042aa5a74",
                css : "",
                cssClass : "hs-overlay-form",
                submitButtonClass : "btn btn-primary hs-button",
            });
        } else if(document.querySelector("#location-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "d0bf7089-7cad-47c2-8199-b516edecdddc",
                css: "",
                cssClass:"bg-primary text-white p-5",
                submitButtonClass:"btn btn-danger hs-button",
            });
        } else if (document.querySelector("#download-resource")) {
            document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'none';
            if (document.querySelector('.resource-request').innerHTML.length > 0) {
                document.querySelector('.pdf-download').style.display = 'none';
            }
            function getUrlVars() {
                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for(var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    vars.push(hash[0]);
                    vars[hash[0]] = hash[1];
                }
                return vars;
            }

            var submitString = getUrlVars()["fs"];
            if(submitString=='y'){
                document.querySelector('.pdf-download').style.display = 'block';;
                document.querySelector('.resource-request').style.display = 'none';
                document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'block';;
            }

            hbspt.forms.create({
                portalId: "2248916",
                formId: "0d6eb558-5d3a-48e6-977f-448765cc24b6",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
                onFormSubmit: function ($form){
                    var deliverability = parseFloat (document.querySelector('.deliverable').textContent);
                    if(deliverability === 0){
                        window.location.href = window.location.pathname+'?fs=y'
                    }
                }
            });
        }
    } else if(filterLang == 'de'){
        if(document.querySelector("#contact-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "0a900227-78e9-4643-b15a-66ccf3444f5b",
                css:"",
                cssClass:"hs-visible-form blue-background",
                submitButtonClass:"btn btn-primary hs-button"
            });
        } else if(document.querySelector("#modal-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "0a900227-78e9-4643-b15a-66ccf3444f5b",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        } else if (document.querySelector("#sales-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "c16de6ca-1de5-4c89-823b-10b2407f333c",
                css: "",
                cssClass: "hs-overlay-form",
                submitButtonClass: "btn btn-primary hs-button",
            });
        } else if(document.querySelector("#location-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "d0bf7089-7cad-47c2-8199-b516edecdddc",
                css: "",
                cssClass:"bg-primary text-white p-5",
                submitButtonClass:"btn btn-danger hs-button",
            });
        } else if (document.querySelector("#download-resource")) {
            document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'none';
            if (document.querySelector('.resource-request').innerHTML.length > 0) {
                document.querySelector('.pdf-download').style.display = 'none';
            }
            function getUrlVars() {
                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for(var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    vars.push(hash[0]);
                    vars[hash[0]] = hash[1];
                }
                return vars;
            }

            var submitString = getUrlVars()["fs"];
            if(submitString=='y'){
                document.querySelector('.pdf-download').style.display = 'block';;
                document.querySelector('.resource-request').style.display = 'none';
                document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'block';;
            }

            hbspt.forms.create({
                portalId: "2248916",
                formId: "0d6eb558-5d3a-48e6-977f-448765cc24b6",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
                onFormSubmit: function ($form){
                    var deliverability = parseFloat (document.querySelector('.deliverable').textContent);
                    if(deliverability === 0){
                        window.location.href = window.location.pathname+'?fs=y'
                    }
                }
            });
        }
    } else if (filterLang == 'it'){
        if(document.querySelector("#contact-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "432c51f5-77b7-454f-a903-e189054977e8",
                css:"",
                cssClass:"hs-visible-form blue-background",
                submitButtonClass:"btn btn-primary hs-button"
            });
        } else if(document.querySelector("#modal-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        } else if (document.querySelector("#sales-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "b0dff973-4804-41c0-bb6f-c6ff8b88ce2b",
                css: "",
                cssClass: "hs-overlay-form",
                submitButtonClass: "btn btn-primary hs-button",
            });
        } else if(document.querySelector("#location-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "d0bf7089-7cad-47c2-8199-b516edecdddc",
                css: "",
                cssClass:"bg-primary text-white p-5",
                submitButtonClass:"btn btn-danger hs-button",
            });
        } else if (document.querySelector("#download-resource")) {
            hbspt.forms.create({
                portalId: "2248916",
                formId: "0d6eb558-5d3a-48e6-977f-448765cc24b6",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
                onFormSubmit: function ($form){
                    var deliverability = parseFloat (document.querySelector('.deliverable').textContent);
                    if(deliverability === 0){
                        window.location.href = window.location.pathname+'?fs=y'
                    }
                }
            });
        }
    } else if (filterLang == 'pl'){
        if(document.querySelector("#contact-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "29cb63ef-125d-4198-8d72-3ed292d5c6da",
                css:"",
                cssClass:"hs-visible-form blue-background",
                submitButtonClass:"btn btn-primary hs-button"
            });
        } else if(document.querySelector("#modal-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        } else if (document.querySelector("#sales-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "b0dff973-4804-41c0-bb6f-c6ff8b88ce2b",
                css: "",
                cssClass: "hs-overlay-form",
                submitButtonClass: "btn btn-primary hs-button",
            });
        } else if(document.querySelector("#location-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "d0bf7089-7cad-47c2-8199-b516edecdddc",
                css: "",
                cssClass:"bg-primary text-white p-5",
                submitButtonClass:"btn btn-danger hs-button",
            });
        } else if (document.querySelector("#download-resource")) {
            document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'none';
            if (document.querySelector('.resource-request').innerHTML.length > 0) {
                document.querySelector('.pdf-download').style.display = 'none';
            }
            function getUrlVars() {
                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for(var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    vars.push(hash[0]);
                    vars[hash[0]] = hash[1];
                }
                return vars;
            }

            var submitString = getUrlVars()["fs"];
            if(submitString=='y'){
                document.querySelector('.pdf-download').style.display = 'block';;
                document.querySelector('.resource-request').style.display = 'none';
                document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'block';;
            }

            hbspt.forms.create({
                portalId: "2248916",
                formId: "0d6eb558-5d3a-48e6-977f-448765cc24b6",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
                onFormSubmit: function ($form){
                    var deliverability = parseFloat (document.querySelector('.deliverable').textContent);
                    if(deliverability === 0){
                        window.location.href = window.location.pathname+'?fs=y'
                    }
                }
            });
        }
    } else if (filterLang == 'ru'){
        if(document.querySelector("#contact-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "f05d71b2-f8e5-43b9-a2a0-8743497cb31e",
                css:"",
                cssClass:"hs-visible-form blue-background",
                submitButtonClass:"btn btn-primary hs-button"
            });
        } else if(document.querySelector("#modal-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        } else if (document.querySelector("#sales-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "b0dff973-4804-41c0-bb6f-c6ff8b88ce2b",
                css: "",
                cssClass: "hs-overlay-form",
                submitButtonClass: "btn btn-primary hs-button",
            });
        } else if(document.querySelector("#location-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "d0bf7089-7cad-47c2-8199-b516edecdddc",
                css: "",
                cssClass:"bg-primary text-white p-5",
                submitButtonClass:"btn btn-danger hs-button",
            });
        } else if (document.querySelector("#download-resource")) {
            document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'none';
            if (document.querySelector('.resource-request').innerHTML.length > 0) {
                document.querySelector('.pdf-download').style.display = 'none';
            }
            function getUrlVars() {
                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for(var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    vars.push(hash[0]);
                    vars[hash[0]] = hash[1];
                }
                return vars;
            }

            var submitString = getUrlVars()["fs"];
            if(submitString=='y'){
                document.querySelector('.pdf-download').style.display = 'block';;
                document.querySelector('.resource-request').style.display = 'none';
                document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'block';;
            }

            hbspt.forms.create({
                portalId: "2248916",
                formId: "0d6eb558-5d3a-48e6-977f-448765cc24b6",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
                onFormSubmit: function ($form){
                    var deliverability = parseFloat (document.querySelector('.deliverable').textContent);
                    if(deliverability === 0){
                        window.location.href = window.location.pathname+'?fs=y'
                    }
                }
            });
        }
    } else if (filterLang == 'tr'){
        if(document.querySelector("#contact-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "97f5826d-aff9-4e1a-ac19-9b7bc52050f4",
                css:"",
                cssClass:"hs-visible-form blue-background",
                submitButtonClass:"btn btn-primary hs-button"
            });
        } else if(document.querySelector("#modal-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        } else if (document.querySelector("#sales-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "b0dff973-4804-41c0-bb6f-c6ff8b88ce2b",
                css: "",
                cssClass: "hs-overlay-form",
                submitButtonClass: "btn btn-primary hs-button",
            });
        } else if(document.querySelector("#location-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "d0bf7089-7cad-47c2-8199-b516edecdddc",
                css: "",
                cssClass:"bg-primary text-white p-5",
                submitButtonClass:"btn btn-danger hs-button",
            });
        } else if (document.querySelector("#download-resource")) {
            document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'none';
            if (document.querySelector('.resource-request').innerHTML.length > 0) {
                document.querySelector('.pdf-download').style.display = 'none';
            }
            function getUrlVars() {
                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for(var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    vars.push(hash[0]);
                    vars[hash[0]] = hash[1];
                }
                return vars;
            }

            var submitString = getUrlVars()["fs"];
            if(submitString=='y'){
                document.querySelector('.pdf-download').style.display = 'block';;
                document.querySelector('.resource-request').style.display = 'none';
                document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'block';;
            }

            hbspt.forms.create({
                portalId: "2248916",
                formId: "0d6eb558-5d3a-48e6-977f-448765cc24b6",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
                onFormSubmit: function ($form){
                    var deliverability = parseFloat (document.querySelector('.deliverable').textContent);
                    if(deliverability === 0){
                        window.location.href = window.location.pathname+'?fs=y'
                    }
                }
            });
        }
    } else if (filterLang == 'zh-hans'){
        if(document.querySelector("#contact-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "dc8e5c99-a60f-4a6a-b42c-64b41d307081",
                css:"",
                cssClass:"hs-visible-form blue-background",
                submitButtonClass:"btn btn-primary hs-button"
            });
        } else if(document.querySelector("#modal-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        } else if (document.querySelector("#sales-form")){
            hbspt.forms.create({
                portalId:"2248916",
                formId:"5814dfcf-6a2b-4b19-8b28-477c99eb4178",
                css:"",
                cssClass: "hs-overlay-form",
                submitButtonClass: "btn btn-primary hs-button",
            });
        } else if(document.querySelector("#location-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "d0bf7089-7cad-47c2-8199-b516edecdddc",
                css: "",
                cssClass:"bg-primary text-white p-5",
                submitButtonClass:"btn btn-danger hs-button",
            });
        } else if (document.querySelector("#download-resource")) {
            document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'none';
            if (document.querySelector('.resource-request').innerHTML.length > 0) {
                document.querySelector('.pdf-download').style.display = 'none';
            }
            function getUrlVars() {
                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for(var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    vars.push(hash[0]);
                    vars[hash[0]] = hash[1];
                }
                return vars;
            }

            var submitString = getUrlVars()["fs"];
            if(submitString=='y'){
                document.querySelector('.pdf-download').style.display = 'block';;
                document.querySelector('.resource-request').style.display = 'none';
                document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'block';;
            }

            hbspt.forms.create({
                portalId: "2248916",
                formId: "0d6eb558-5d3a-48e6-977f-448765cc24b6",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
                onFormSubmit: function ($form){
                    var deliverability = parseFloat (document.querySelector('.deliverable').textContent);
                    if(deliverability === 0){
                        window.location.href = window.location.pathname+'?fs=y'
                    }
                }
            });
        }
    } else if(filterLang == 'ar'){
        if(document.querySelector("#contact-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass: "hs-visible-form blue-background",
                submitButtonClass: "btn btn-danger"
            });
        } else if(document.querySelector("#modal-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        }
    } else if(filterLang == 'nb'){
        if(document.querySelector("#modal-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        }
    } else if(filterLang == 'pt-br'){
        if(document.querySelector("#modal-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        }
    } else if(filterLang == 'pt'){
        if(document.querySelector("#modal-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        }
    } else if(filterLang == 'cs'){
        if(document.querySelector("#modal-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        }
    } else if(filterLang == 'nl'){
        if(document.querySelector("#modal-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        }
    } else if(filterLang == 'jp'){
        if(document.querySelector("#contact-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "50e3876e-bc1a-4a66-85c4-93f6b91602b2",
                css:"",
                cssClass:"hs-visible-form p-7",
                submitButtonClass:"btn btn-danger"
              });
        }
    } else if(filterLang == ''){ 
        if(document.querySelector("#contact-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass: "hs-visible-form blue-background",
                submitButtonClass: "btn btn-danger"
            });
        } else if(document.querySelector("#modal-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "a014d83c-8942-4076-8c95-bc6c47ff38c4",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        } else if (document.querySelector("#sales-form")){
            hbspt.forms.create({
                portalId: "2248916",
                formId: "b0dff973-4804-41c0-bb6f-c6ff8b88ce2b",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
            });
        } else if(document.querySelector("#location-form")){
            hbspt.forms.create({
                region: "na1",
                portalId: "2248916",
                formId: "d0bf7089-7cad-47c2-8199-b516edecdddc",
                css: "",
                cssClass:"bg-primary text-white p-5",
                submitButtonClass:"btn btn-danger hs-button",
            });
        } else if (document.querySelector("#download-resource")) {
            document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'none';
            if (document.querySelector('.resource-request').innerHTML.length > 0) {
                document.querySelector('.pdf-download').style.display = 'none';
            }
            function getUrlVars() {
                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for(var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    vars.push(hash[0]);
                    vars[hash[0]] = hash[1];
                }
                return vars;
            }

            var submitString = getUrlVars()["fs"];
            if(submitString=='y'){
                document.querySelector('.pdf-download').style.display = 'block';;
                document.querySelector('.resource-request').style.display = 'none';
                document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'block';;
            }

            hbspt.forms.create({
                portalId: "2248916",
                formId: "0d6eb558-5d3a-48e6-977f-448765cc24b6",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
                onFormSubmit: function ($form){
                    var deliverability = parseFloat (document.querySelector('.deliverable').textContent);
                    if(deliverability === 0){
                        window.location.href = window.location.pathname+'?fs=y'
                    }
                }
            });
        } else if (document.querySelector("technical-drawings-form")) {
            document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'none';
            if (document.querySelector('.resource-request').innerHTML.length > 0) {
                document.getElementById("disclaimer").style.display = "block";
                document.querySelector('#resource-table').style.display = 'none';
            }
             
            function getUrlVars() {
                var vars = [], hash;
                var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                for(var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
                }
                return vars;
            }
             
            var submitString = getUrlVars()["fs"];
            if(submitString=='y'){
                document.querySelector('#resource-table').style.display = 'block';
                document.querySelector('.resource-request').style.display = 'none';
                document.getElementById("disclaimer").style.display = "none";
                document.querySelector('#block-aesbase-resourcesubmissionnotice').style.display = 'block';;
            }

            hbspt.forms.create({
                portalId: "2248916",
                formId: "f3b56435-d63b-471b-9416-03b57fd08e78",
                css: "",
                cssClass:"hs-overlay-form",
                submitButtonClass:"btn btn-primary hs-button",
                onFormSubmit: function ($form){
                        window.location.href = window.location.pathname+'?fs=y'
                }
            });
        }
    }
});