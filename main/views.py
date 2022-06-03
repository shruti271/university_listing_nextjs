# from django.shortcuts import render
# from rest_framework.views import APIView
# from rest_framework import permissions
# from rest_framework.response import Response
# from .models import Post

# # Blo views
# class BlogView(APIView):
#     """ Simple endpoint to test auth """
#     permission_classes = [permissions.AllowAny]
#     serializer_class = PostSerializer

#     def get(self, request, format=None):
#         """ Return request.user and request.auth """
#         context = {'request': request}

#         posts = Post.objects.all()
#         serializer = self.serializer_class(posts, many=True, context=context).data
#         return Response(serializer)