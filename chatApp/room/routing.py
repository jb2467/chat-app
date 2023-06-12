from django.urls import path

from . import consumer

websocket_urlpatterns = [
    path('ws/<str:room_name>/', consumer.chat_consumer.as_asgi()),
]