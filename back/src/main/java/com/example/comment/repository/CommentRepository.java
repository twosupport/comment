package com.example.comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import javax.xml.stream.events.Comment;
import java.time.LocalDateTime;
import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findAllByModifiedAtBetweenOrderByModifiedAtDesc(LocalDateTime start, LocalDateTime end);
}
