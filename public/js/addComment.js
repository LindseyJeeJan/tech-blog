const commentSubmit = $('#btn-submit');

const newCommentHandler = async (event) => {
  event.preventDefault();

   const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

  const comment = document.querySelector('#post-comment').value.trim();

  if (comment) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ 
          post_id, 
          comment
       }),
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