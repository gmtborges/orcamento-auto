package handler

import (
	"github.com/labstack/echo/v4"

	"github.com/gmtborges/orcamento-auto/views/pages"
)

type IndexHandler struct{}

func NewIndexHandler() *IndexHandler {
	return &IndexHandler{}
}

func (h *IndexHandler) Index(c echo.Context) error {
	return pages.Index().Render(c.Request().Context(), c.Response())
}
