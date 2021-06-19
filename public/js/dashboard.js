const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post.');
    }
  }
};

const updateButtonHandler = async (event) => {
  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();
  const id = event.target.getAttribute('data-id');
  console.log(id);
    if (title && content) {
    const response = await fetch(`/api/post/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }), 
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/post/${id}');
    } else {
      alert('Failed to update post');
    }
  }
  
};
 
const showPost = (event) => {
  $(event.target).closest('.card').find('.card-body').show();
}

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);


$('.post-list').on('click', '#btn-delete', delButtonHandler);
$('.post-list').on('click', '#btn-update', updateButtonHandler);
$('.post-list').on('click', '.card-header a', showPost);
