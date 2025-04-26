function select_file() {
    const container = document.querySelector('.select_file');
    let input = document.createElement('input');
    input.type = 'file';
    input.style.display = 'none';
    document.body.appendChild(input);

    const resetContainer = () => {
        container.innerHTML = `<div class="green-btn">
                                <svg class="btn-icon" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_2389_8579" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="20">
                                <rect x="0.5" width="20" height="20" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_2389_8579)">
                                <path d="M9.875 15.3206H11.125V11.6252L12.6667 13.1668L13.5448 12.2758L10.5 9.231L7.45521 12.2758L8.34625 13.1539L9.875 11.6252V15.3206ZM5.75646 17.9168C5.33549 17.9168 4.97917 17.771 4.6875 17.4793C4.39583 17.1877 4.25 16.8313 4.25 16.4104V3.58995C4.25 3.16898 4.39583 2.81266 4.6875 2.521C4.97917 2.22933 5.33549 2.0835 5.75646 2.0835H12.375L16.75 6.4585V16.4104C16.75 16.8313 16.6042 17.1877 16.3125 17.4793C16.0208 17.771 15.6645 17.9168 15.2435 17.9168H5.75646ZM11.75 7.0835V3.3335H5.75646C5.69229 3.3335 5.63354 3.36023 5.58021 3.4137C5.52674 3.46704 5.5 3.52579 5.5 3.58995V16.4104C5.5 16.4745 5.52674 16.5333 5.58021 16.5866C5.63354 16.6401 5.69229 16.6668 5.75646 16.6668H15.2435C15.3077 16.6668 15.3665 16.6401 15.4198 16.5866C15.4733 16.5333 15.5 16.4745 15.5 16.4104V7.0835H11.75Z" fill="white"/>
                                </g>
                                </svg>
                            </div>
                            <p class="text-body-large"><button class="text-label-medium">Click here</button> to upload your file or drag and drop.</p>
                            <p class="text-body-small">Supported format: SVG, JPG, PNG (10mb each)</p>`;
        const btn = container.querySelector('button');
        btn.addEventListener('click', e => {
            e.preventDefault();

            const newInput = document.createElement('input');
            newInput.type = 'file';
            newInput.style.display = 'none';
            document.body.appendChild(newInput);
            newInput.addEventListener('change', e => handleFiles(e.target.files));

            document.body.removeChild(input);
            input = newInput;

            input.click();
        });
    };

    resetContainer();

    const handleFiles = files => {
        if (!files.length) return;
        const file = files[0];

        const objectUrl = URL.createObjectURL(file);

        container.innerHTML = '';
        const preview = document.createElement('div');
        preview.className = 'file-preview';
        preview.innerHTML = `
<div class="green-btn">
                                <svg class="btn-icon" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_2389_8579" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="20">
                                <rect x="0.5" width="20" height="20" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_2389_8579)">
                                <path d="M9.875 15.3206H11.125V11.6252L12.6667 13.1668L13.5448 12.2758L10.5 9.231L7.45521 12.2758L8.34625 13.1539L9.875 11.6252V15.3206ZM5.75646 17.9168C5.33549 17.9168 4.97917 17.771 4.6875 17.4793C4.39583 17.1877 4.25 16.8313 4.25 16.4104V3.58995C4.25 3.16898 4.39583 2.81266 4.6875 2.521C4.97917 2.22933 5.33549 2.0835 5.75646 2.0835H12.375L16.75 6.4585V16.4104C16.75 16.8313 16.6042 17.1877 16.3125 17.4793C16.0208 17.771 15.6645 17.9168 15.2435 17.9168H5.75646ZM11.75 7.0835V3.3335H5.75646C5.69229 3.3335 5.63354 3.36023 5.58021 3.4137C5.52674 3.46704 5.5 3.52579 5.5 3.58995V16.4104C5.5 16.4745 5.52674 16.5333 5.58021 16.5866C5.63354 16.6401 5.69229 16.6668 5.75646 16.6668H15.2435C15.3077 16.6668 15.3665 16.6401 15.4198 16.5866C15.4733 16.5333 15.5 16.4745 15.5 16.4104V7.0835H11.75Z" fill="white"/>
                                </g>
                                </svg>
                            </div>
<span>${file.name}</span>
<div class="buttons2">
<button class="open-file">Open</button>
<button class="remove-file">Remove</button></div>
`;
        container.appendChild(preview);

        preview.querySelector('.open-file').addEventListener('click', e => {
            e.preventDefault();
            window.open(objectUrl, '_blank');
        });

        preview.querySelector('.remove-file').addEventListener('click', e => {
            e.preventDefault();
            URL.revokeObjectURL(objectUrl);
            resetContainer();
        });

        setTimeout(() => preview.classList.add('active'), 10);
    };

    container.addEventListener('dragover', e => {
        e.preventDefault();
        container.classList.add('dragover');
    });
    container.addEventListener('dragleave', e => {
        e.preventDefault();
        container.classList.remove('dragover');
    });
    container.addEventListener('drop', e => {
        e.preventDefault();
        container.classList.remove('dragover');
        handleFiles(e.dataTransfer.files);
    });
    input.addEventListener('change', e => handleFiles(e.target.files));
}

select_file();