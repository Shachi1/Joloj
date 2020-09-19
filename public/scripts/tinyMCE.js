window.onload = function() {
    tinyMCE.init({
        selector: '#tiny-mce-post-body',
        plugins: ["advlist lists link autolink autosave code", 'preview', 'searchreplace', 'wordcount', 'media table emoticons image imagetools'],
        toolbar: 'bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | forecolor backcolor emoticons | code preview'
    })
}