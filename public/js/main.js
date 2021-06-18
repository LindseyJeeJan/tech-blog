const commentSubmit = $('#btn-submit');

const newCommentHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#post-comment').value.trim();

  if (content) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add comment');
    }
  }
};

commentSubmit.on('click', newCommentHandler);